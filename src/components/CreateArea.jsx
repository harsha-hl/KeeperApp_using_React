import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
      title: "",
      content: ""
  });
  const [zoom, setZoom] = useState(false);

  function zoomIn(event) {
    setZoom(true);
  }
  function change(event){
      const {name, value} = event.target; //Destructuring an objct.......Dont ever put this line inside setNote!!!!!!
      setNote(prevNote => {
          return {
              ...prevNote,
              [name] : value
          }
      });
  }
  function submitNote(event) {
    props.addNote(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault(); //Very important
  }
 
  return (
    <div>
      <form className="create-note"> 
        {zoom && <input onChange={change} name="title" placeholder="Title" value={note.title}/>}
        <textarea onChange={change} name="content" placeholder="Take a note..." value={note.content} rows={zoom ? "3" : "1"} onClick={zoomIn}/>
        <Zoom in={zoom}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
