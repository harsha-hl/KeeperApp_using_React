import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  
  const [notes, setNotes] = useState([]);

  function addNote(note){
      setNotes(prevNotes => [...prevNotes, note]);
      //or
    //setNotes(prevNotes => {return [...prevNotes, note]});
  }

  function deleteNote(id){
    setNotes(prevNotes => {
        return prevNotes.filter((note, index) => {
            return id!==index; //Removes the note with the index passed from Note.jsx
        })
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote}/>
      { notes.map((note, index) => <Note id={index} key={index} title={note.title} content={note.content} delete={deleteNote}/>)}
      <Footer />
    </div>
  );
}

export default App;
