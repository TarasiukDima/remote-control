import { getMousePos, moveMouse } from 'robotjs';
import { Duplex } from 'stream';
import { showErrorMessage, showSuccessfulMessages } from '../utils/index';
import { COMMANDS } from '../settings/index';

export const mouseUp = (duplex: Duplex, coords: Array<string>): void => {
  try {
    const { x, y } = getMousePos();
    const offset = Number(coords[0]) || 0;
    const newY = y - offset;

    moveMouse(x, newY);
    showSuccessfulMessages(duplex, COMMANDS.mouseUp);
  } catch (error) {
    showErrorMessage(duplex, COMMANDS.mouseUp);
  }
};

export const mouseDown = (duplex: Duplex, coords: Array<string>): void => {
  try {
    const { x, y } = getMousePos();
    const offset = Number(coords[0]) || 0;
    const newY = y + offset;

    moveMouse(x, newY);
    showSuccessfulMessages(duplex, COMMANDS.mouseDown);
  } catch (error) {
    showErrorMessage(duplex, COMMANDS.mouseDown);
  }
};

export const mouseLeft = (duplex: Duplex, coords: Array<string>): void => {
  try {
    const { x, y } = getMousePos();
    const offset = Number(coords[0]) || 0;
    const newX = x - offset;

    moveMouse(newX, y);
    showSuccessfulMessages(duplex, COMMANDS.mouseLeft);
  } catch (error) {
    showErrorMessage(duplex, COMMANDS.mouseLeft);
  }
};

export const mouseRight = (duplex: Duplex, coords: Array<string>): void => {
  try {
    const { x, y } = getMousePos();
    const offset = Number(coords[0]) || 0;
    const newX = x + offset;

    moveMouse(newX, y);
    showSuccessfulMessages(duplex, COMMANDS.mouseRight);
  } catch (error) {
    showErrorMessage(duplex, COMMANDS.mouseRight);
  }
};

export const mousePosition = (duplex: Duplex): void => {
  try {
    const { x, y } = getMousePos();
    const message = `mouse_position {${x} px},{${y} px}`;

    showSuccessfulMessages(duplex, message);
  } catch (error) {
    showErrorMessage(duplex, COMMANDS.mousePosition);
  }
};
