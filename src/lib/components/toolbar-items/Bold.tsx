import React from "react";
import { boldifySelection } from "../../services/text-editing-commands";

const Bold = () => (
  <button onClick={boldifySelection}>BOLD</button>
);

export default Bold;
