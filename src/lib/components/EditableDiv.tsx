import React from "react";
import styled from "styled-components";

const Div = styled.div`
  border: 1px solid gray;
  min-height: 200px;
  padding: 5px;
`;

interface Props {
  initialContent?: string;
}

const EditableDiv = ({ initialContent }: Props) => (
  <Div
    contentEditable="true"
    dangerouslySetInnerHTML={{ __html: initialContent ?? "" }}
  ></Div>
);

export default EditableDiv;
