import { Duplex } from 'stream';
import { showFrontMessage, showMessage } from '../utils/index';
import { COMMANDS, NOT_FOUND_COMMAND } from '../settings/index';
import {
  drawCircle,
  drawRectangle,
  drawSquare,
  mouseDown,
  mouseLeft,
  mousePosition,
  mouseRight,
  mouseUp,
  printScrn,
} from './commands';

export const readCommand = (duplex: Duplex, frontCommand: string) => {
  const [command, ...coords] = frontCommand.split(' ');

  showMessage(frontCommand);
  showFrontMessage(duplex, frontCommand);

  switch (command) {
    case COMMANDS.mouseUp: {
      mouseUp(coords);
      break;
    }

    case COMMANDS.mouseDown: {
      mouseDown(coords);
      break;
    }

    case COMMANDS.mouseLeft: {
      mouseLeft(coords);
      break;
    }

    case COMMANDS.mouseRight: {
      mouseRight(coords);
      break;
    }

    case COMMANDS.mousePosition: {
      mousePosition();
      break;
    }

    case COMMANDS.drawCircle: {
      drawCircle(duplex, command, coords);
      break;
    }

    case COMMANDS.drawRectangle: {
      drawRectangle(duplex, command, coords);
      break;
    }

    case COMMANDS.drawSquare: {
      drawSquare(duplex, command, coords);
      break;
    }

    case COMMANDS.printScrn: {
      printScrn(duplex, command, coords);
      break;
    }

    default: {
      showFrontMessage(duplex, NOT_FOUND_COMMAND);
      break;
    }
  }
};
