import Jimp from 'jimp';
import { getMousePos } from 'robotjs';
import { showMessage } from '../utils/index';
import { Duplex } from 'stream';
import { COMMANDS } from '../settings/index';

const showFrontMessage = (duplex: Duplex, message: string) => {
  duplex.write(`${message}\0`);
};

export const readCommand = (duplex: Duplex, frontCommand: string) => {
  const [command, ...coords] = frontCommand.split(' ');

  showMessage(frontCommand);

  switch (command) {
    case COMMANDS.mouseUp: {
      showFrontMessage(duplex, frontCommand);
      break;
    }

    case COMMANDS.mouseDown: {
      showFrontMessage(duplex, frontCommand);
      break;
    }

    case COMMANDS.mouseLeft: {
      showFrontMessage(duplex, frontCommand);
      break;
    }

    case COMMANDS.mouseRight: {
      showFrontMessage(duplex, frontCommand);
      break;
    }

    case COMMANDS.mousePosition: {
      showFrontMessage(duplex, frontCommand);
      break;
    }

    case COMMANDS.drawCircle: {
      showFrontMessage(duplex, frontCommand);
      break;
    }

    case COMMANDS.drawRectangle: {
      showFrontMessage(duplex, frontCommand);
      break;
    }

    case COMMANDS.drawSquare: {
      showFrontMessage(duplex, frontCommand);
      break;
    }

    case COMMANDS.printScrn: {
      showFrontMessage(duplex, frontCommand);
      break;
    }

    default: {
      showFrontMessage(duplex, frontCommand);
      break;
    }
  }
};
