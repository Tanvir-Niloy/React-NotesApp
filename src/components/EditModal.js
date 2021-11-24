import React from "react";

export const EditModal = ({ editid, notes, setNotes }) => {

  
  const updateHandler = () => {
    const updateNotes = notes.map((elem) => {
      if (editid === elem.id) {
        return {
          ...elem,
          title: document.getElementById("edittitle").value,
          desc: document.getElementById("editdesc").value,
        };
      } else {
        return elem;
      }
    });

    setNotes(updateNotes);
  };

  return (
    <>
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Your Notes
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="Title" className="form-label">
                      Edit Title
                    </label>
                    <input
                      type="text"
                      id="edittitle"
                      className="form-control"
                      placeholder="Enter Title"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Edit Description</label>
                    <textarea
                      name="desc"
                      id="editdesc"
                      rows="3"
                      className="form-control"
                      placeholder="Enter Description"
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  onClick={updateHandler}
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Edit Notes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
