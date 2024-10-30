const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ error: true, message: "Access token is missing" });

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: true, message: "Invalid token" });
        req.user = user; // Attach the user data to req.user
        next();
    });
}

module.exports = { authenticateToken };
