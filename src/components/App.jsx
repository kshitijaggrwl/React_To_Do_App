import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, updateNotes] = useState([]);

  function addNotes(obj) {
    updateNotes(prev => [...prev, obj]);
  }
  function deleteNote(id) {
    updateNotes(notes.filter((note, index) => index !== id));
  }
  return (
    <div>
      <Header />
      <CreateArea addNotes={addNotes} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          deleteNote={deleteNote}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
