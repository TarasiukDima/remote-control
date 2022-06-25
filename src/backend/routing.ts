import { Duplex } from 'stream';
import { showFrontMessage, showMessage } from '../utils/index';
import { COMMANDS, NOT_FOUND_COMMAND } from '../settings/index';
import { mouseDown, mouseLeft, mousePosition, mouseRight, mouseUp } from './commandsCursor';
import { drawCircle, drawRectangle, drawSquare, printScrn } from './commandsPainting';

export const readCommand = (duplex: Duplex, frontCommand: string) => {
  const [command, ...coords] = frontCommand.split(' ');
  showMessage(`Got command: ${frontCommand}`);

  switch (command) {
    case COMMANDS.mouseUp: {
      mouseUp(duplex, coords);
      break;
    }

    case COMMANDS.mouseDown: {
      mouseDown(duplex, coords);
      break;
    }

    case COMMANDS.mouseLeft: {
      mouseLeft(duplex, coords);
      break;
    }

    case COMMANDS.mouseRight: {
      mouseRight(duplex, coords);
      break;
    }

    case COMMANDS.mousePosition: {
      mousePosition(duplex);
      break;
    }

    case COMMANDS.drawCircle: {
      drawCircle(duplex, coords);
      break;
    }

    case COMMANDS.drawRectangle: {
      drawRectangle(duplex, coords);
      break;
    }

    case COMMANDS.drawSquare: {
      drawSquare(duplex, coords);
      break;
    }

    case COMMANDS.printScrn: {
      printScrn(duplex, coords);
      break;
    }

    default: {
      showFrontMessage(duplex, NOT_FOUND_COMMAND);
      break;
    }
  }
};
