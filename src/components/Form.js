import React from "react";

function Form({ title, setTitle, desc, setDesc, notes, setNotes }) {
  const inputHandler = (e) => {
    e.preventDefault();

    if (e.target.id === "title") {
      setTitle(e.target.value);
    } else {
      setDesc(e.target.value);
    }
  };

  const addNotesHandler = (e) => {
    e.preventDefault();

    if (title !== "" && desc !== "") {
      setNotes((note) => {
        return [
          ...note,
          {
            title: title,
            desc: desc,
            id: new Date().getTime(),
          },
        ];
      });
    }

    setTitle("");
    setDesc("");
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 my-5">
            <form
              style={{
                border: "2px solid #ced4da",
                borderRadius: "10px",
                padding: "30px",
              }}
            >
              <div className="mb-3">
                <label htmlFor="Title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="form-control"
                  placeholder="Enter Title"
                  value={title}
                  onChange={inputHandler}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  name="desc"
                  id="desc"
                  rows="3"
                  className="form-control"
                  placeholder="Enter Description"
                  value={desc}
                  onChange={inputHandler}
                />
              </div>
              <button
                onClick={addNotesHandler}
                type="submit"
                className="btn btn-primary"
              >
                Add notes
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
