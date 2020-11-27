import { BOLD } from "./availableCommands";

export const boldifySelection = () => {
  document.execCommand(BOLD);
};
