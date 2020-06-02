import React, { useState } from "react";

function CreateArea(props) {
  const [note, handleNote] = useState({
    title: "",
    content: ""
  });

  function updateNote(e) {
    // if (e.target.name === "title") {
    //   handleNote(prev => ({
    //     title: e.target.value,
    //     content: prev.content
    //   }));
    // } else {
    //   handleNote(prev => ({
    //     title: prev.title,
    //     content: e.target.value
    //   }));
    // }
    // e.persist();

    const { name, value } = e.target;
    handleNote(prev => {
      return { ...prev, [name]: value };
    });
  }
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          props.addNotes(note);
          handleNote({
            title: "",
            content: ""
          });
        }}
      >
        <input
          onChange={updateNote}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={updateNote}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
