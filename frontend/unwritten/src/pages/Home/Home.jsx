import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import NoteCard from '../../components/Cards/NoteCard'
import { MdAdd } from 'react-icons/md'
import AddEditNotes from './AddEditNotes'
import Model from 'react-modal'

const Home = () => {

  const [openAddEditModel, setOpenAddEditModel] = useState({
    isShown: false,
    type: "add",
    data: null,
  });



  return (
    <>
      <Navbar />

      <div className=' container mx-auto'>
        <div className='grid grid-cols-3 gap-4 mt-8'>
          <NoteCard 
            title="Meeting on 1st April" 
            date="3rd April 2022" 
            content="Meeting on 1st April Meeting on 1st April" 
            tags="#Meeting"
            isPinned={true}
            onEdit={()=>{}}
            onDelete={()=>{}}
            onPinNote={()=>{}}
            /> 
            
            {/*{allNotes.map((item, index) => (
            <NoteCard 
            key={item._id}
            title={item.title}
            date={item.createdOn}
            content={item.content} 
            tags={item.tags}
            isPinned={item.isPinned}
            onEdit={()=>{}}
            onDelete={()=>{}}
            onPinNote={()=>{}}
            />
          ))}*/}

          </div>
      </div>

      <button 
        className=' flex w-16 h-16 items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10'
        onClick={()=>{
          setOpenAddEditModel({ isShown: true, type: "add", data: null});
        }}
      >
        <MdAdd className='text-[32px] text-white'/>
      </button>

      <Model 
        isOpen = {openAddEditModel.isShown}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0,2)",
          },
        }}
        contentLabel=""
        className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll"
        >

        <AddEditNotes 
          type={openAddEditModel.type}
          noteData={openAddEditModel.data}
          onClose={() => {
            setOpenAddEditModel({ isShown: false, type: "add", data: null});
          }}
        />

      </Model>
    </>
  )
}

export default Home
