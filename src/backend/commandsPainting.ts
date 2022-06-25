import Jimp from 'jimp';
import { dragMouse, getMousePos, mouseClick, mouseToggle, moveMouseSmooth } from 'robotjs';
import { Duplex } from 'stream';
import { showErrorMessage, showSuccessfulMessages } from '../utils/index';
import { COMMANDS } from '../settings/index';

const paintCircle = (radius: number): void => {
  const { x, y } = getMousePos();
  const stepPaint = 0.05;
  const endPrinting = Math.PI * 2 + stepPaint;

  mouseClick();
  mouseToggle('down', 'left');

  for (let i = 0; i <= endPrinting; i += stepPaint) {
    const offsetX = x + radius - radius * Math.cos(i);
    const offsetY = y - radius * Math.sin(i);
    dragMouse(offsetX, offsetY);
  }

  mouseToggle('up', 'left');
};

export const drawCircle = (duplex: Duplex, coords: Array<string>): void => {
  try {
    const radiusCircle = Number(coords[0]) || 0;
    paintCircle(radiusCircle);
    showSuccessfulMessages(duplex, `${COMMANDS.drawCircle} with radius - ${radiusCircle}px.`);
  } catch (error) {
    showErrorMessage(duplex, COMMANDS.drawCircle);
  }
};

const paintRectangle = (width: number, height: number): void => {
  const { x, y } = getMousePos();
  mouseClick();
  mouseToggle('down', 'left');
  moveMouseSmooth(x + width, y);
  moveMouseSmooth(x + width, y + height);
  moveMouseSmooth(x, y + height);
  moveMouseSmooth(x, y);
  mouseToggle('up', 'left');
};

export const drawRectangle = (duplex: Duplex, coords: Array<string>): void => {
  try {
    if (!coords[1]) {
      throw new Error('');
    }
    const width = Number(coords[0]) || 0;
    const height = Number(coords[1]) || 0;
    paintRectangle(width, height);
    showSuccessfulMessages(
      duplex,
      `${COMMANDS.drawRectangle}. Width - ${width}px, height - ${height}px.`
    );
  } catch (error) {
    showErrorMessage(duplex, COMMANDS.drawRectangle);
  }
};

export const drawSquare = (duplex: Duplex, coords: Array<string>): void => {
  try {
    const widthSquare = Number(coords[0]) || 0;
    paintRectangle(widthSquare, widthSquare);
    showSuccessfulMessages(duplex, `${COMMANDS.drawSquare} side width - ${widthSquare}px.`);
  } catch (error) {
    showErrorMessage(duplex, COMMANDS.drawSquare);
  }
};

export const printScrn = (duplex: Duplex, coords: Array<string>): void => {
  try {
    showSuccessfulMessages(duplex, COMMANDS.printScrn);
  } catch (error) {
    showErrorMessage(duplex, COMMANDS.printScrn);
  }
};
