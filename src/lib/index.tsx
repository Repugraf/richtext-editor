import React from "react";
import EditorWrapper from "./components/EditorWrapper";
import EditorToolbar from "./components/EditorToolbar";

interface Props {
  initialContent?: string;
}

const EditorContainer = ({ initialContent }: Props) => {
  return (
    <>
      <EditorToolbar />
      <EditorWrapper initialContent={initialContent} />
    </>
  );
};

export default EditorContainer;
