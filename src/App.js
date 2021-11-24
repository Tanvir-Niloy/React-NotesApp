
import React,{useState} from 'react'
import { EditModal } from './components/EditModal';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Notes from './components/Notes';


function App() {

  const [title,setTitle]= useState('');
  const [desc,setDesc]= useState('');
  const [notes,setNotes]= useState(getNotesFromLs);
  const [editid,setEditId]= useState('');


  localStorage.setItem('notes',JSON.stringify(notes))


  return (
    <div>
      <EditModal editid={editid} notes={notes} setNotes={setNotes}/>
    <Navbar/>
    <Form title={title} setTitle={setTitle} desc={desc} setDesc={setDesc} notes={notes} setNotes={setNotes}/>
    <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 my-2">
              <h1 className='mb-3'>Your Notes</h1>
           {
              notes.length===0? <div className="card mb-5">
              <div className="card-body">
                <h5 className="card-title">Message</h5>
                <p className="card-text">
                 No notes are available for reading
                </p>      
              </div>
            </div>:notes.map((element)=>{

               return(

                 <Notes  element={element} key={element.id} notes={notes} setNotes={setNotes} setEditId={setEditId}/>
               )
            })
           }

        </div>
      </div>
      </div>
    </div>
  );

  function getNotesFromLs(){

    const note = JSON.parse(localStorage.getItem('notes'));

    if(note){

       return note
    }else{

       return []
    }
  }
}

export default App;
