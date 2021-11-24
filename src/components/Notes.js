import React from "react";

function Notes({ element, notes, setNotes,setEditId }) {
  const removeHandler = (id) => {
    const removeNotes = notes.filter((elm) => {
      if (elm.id !== id) {
        return elm;
      }
    });

    setNotes(removeNotes);
 
  };

  const editHandler = (id) => {
    setEditId(id)
    notes.filter((elm)=>{

       if(elm.id===id){

         document.getElementById('edittitle').value=elm.title;
         document.getElementById('editdesc').value=elm.desc;

       }
    })

  };

  return (
    <>
      <div className="card mb-5">
        <div className="card-body" style={{ textTransform: "capitalize" }}>
          <h5 className="card-title">{element.title}</h5>
          <p className="card-text">{element.desc}</p>
          <button
            type="button"
            onClick={() => editHandler(element.id)}
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Edit
          </button>
          <button
            className="btn btn-danger mx-3"
            onClick={() => removeHandler(element.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
}

export default Notes;
