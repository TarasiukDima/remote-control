import Jimp from 'jimp';
import { getMousePos, moveMouse } from 'robotjs';
import { Duplex } from 'stream';
import { showFrontMessage, showMessage } from '../utils/index';

export const mouseUp = (coords: Array<string>) => {
  const { x, y } = getMousePos();
  const offset = Number(coords[0]) || 0;
  const newY = y - offset;
  moveMouse(x, newY);
};

export const mouseDown = (coords: Array<string>) => {
  const { x, y } = getMousePos();
  const offset = Number(coords[0]) || 0;
  const newY = y + offset;
  moveMouse(x, newY);
};

export const mouseLeft = (coords: Array<string>) => {
  const { x, y } = getMousePos();
  const offset = Number(coords[0]) || 0;
  const newX = x - offset;
  moveMouse(newX, y);
};

export const mouseRight = (coords: Array<string>) => {
  const { x, y } = getMousePos();
  const offset = Number(coords[0]) || 0;
  const newX = x + offset;
  moveMouse(newX, y);
};

export const mousePosition = () => {
  const { x, y } = getMousePos();
  showMessage(`mouse_position {${x} px},{${y} px}`);
};

export const drawCircle = (duplex: Duplex, command: string, coords: Array<string>) => {
  showFrontMessage(duplex, command);
};

export const drawRectangle = (duplex: Duplex, command: string, coords: Array<string>) => {
  showFrontMessage(duplex, command);
};

export const drawSquare = (duplex: Duplex, command: string, coords: Array<string>) => {
  showFrontMessage(duplex, command);
};

export const printScrn = (duplex: Duplex, command: string, coords: Array<string>) => {
  showFrontMessage(duplex, command);
};
