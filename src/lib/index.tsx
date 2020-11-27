import React from "react";
import EditableDiv from "./components/EditableDiv";
import EditorToolbar from "./components/EditorToolbar";

const Editor = () => {
  return (
    <>
      <EditorToolbar />
      <EditableDiv initialContent="<p>hello</p>" />
    </>
  );
};

export default Editor;
