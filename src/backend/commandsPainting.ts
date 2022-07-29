import Jimp from 'jimp';
import { dragMouse, getMousePos, mouseClick, mouseToggle, moveMouseSmooth, screen } from 'robotjs';
import { Duplex } from 'stream';
import {
  showErrorMessage,
  showFrontMessage,
  showSuccessfulMessages,
  writeSuccessfulMessage,
} from '../utils/index';
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

const getBase64StringScreenshot = async (): Promise<string> => {
  const imgWidth = 200;
  const imgHeight = 200;
  const { x, y } = getMousePos();
  const startScreenPositionX = x - imgWidth / 2;
  const startScreenPositionY = y - imgHeight / 2;
  const screenX = startScreenPositionX > 0 ? startScreenPositionX : 0;
  const screenY = startScreenPositionY > 0 ? startScreenPositionY : 0;

  const screenShot = screen.capture(screenX, screenY, imgWidth, imgHeight);
  const img = new Jimp({
    data: screenShot.image,
    width: screenShot.width,
    height: screenShot.height,
  });

  for (let x = 0; x < imgWidth; x++) {
    for (let y = 0; y < imgHeight; y++) {
      const hex = screenShot.colorAt(x, y);
      const num = parseInt(hex + 'ff', 16);
      img.setPixelColor(num, x, y);
    }
  }

  const imageBase64 = await img.getBase64Async(Jimp.MIME_PNG);
  const needImgPart = imageBase64.split(',');

  return needImgPart.pop() || '';
};

export const printScrn = async (duplex: Duplex): Promise<void> => {
  try {
    const base64ImageString = await getBase64StringScreenshot();

    showFrontMessage(duplex, `${COMMANDS.printScrn} ${base64ImageString}`);
    writeSuccessfulMessage(COMMANDS.printScrn);
  } catch (error) {
    showErrorMessage(duplex, COMMANDS.printScrn);
  }
};
