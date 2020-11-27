import React, { useEffect } from "react";
import Editor from "../editor";

interface Props {
  initialContent?: string;
}

const EditorWrapper = ({ initialContent }: Props) => {
  const editor = new Editor(initialContent);
  useEffect(() => () => editor.destroy(), []);

  return <div ref={(e: HTMLDivElement) => editor.mount(e)}></div>;
};

export default EditorWrapper;
