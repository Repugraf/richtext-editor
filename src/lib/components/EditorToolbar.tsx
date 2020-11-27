import React from "react";
import styled from "styled-components";
import Bold from "./toolbar-items/Bold";

const EditorToolbarContainer = styled.div`
  border: 1px solid gray;
  border-bottom: none;
  display: flex;
  min-height: 40px;
  align-items: center;
  padding: 0 0.2rem;
`;

const EditorToolbar = () => (
  <EditorToolbarContainer>
    <Bold/>
  </EditorToolbarContainer>
);

export default EditorToolbar;
