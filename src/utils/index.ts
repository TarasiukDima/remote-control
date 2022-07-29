import { EOL } from 'os';
import { Duplex } from 'stream';

export const showMessage = (message: string): void => {
  process.stdout.write(`${message + EOL}\0`);
};

export const writeSuccessfulMessage = (message: string): void => {
  process.stdout.write(`Successful: ${message + EOL + EOL}\0`);
};
export const writeErrorMessage = (message: string): void => {
  process.stdout.write(`Error command: ${message + EOL + EOL}\0`);
};

export const showFrontMessage = (duplex: Duplex, message: string) => {
  duplex.write(`${message} \0`);
};

export const showSuccessfulMessages = (duplex: Duplex, message: string): void => {
  showFrontMessage(duplex, message);
  writeSuccessfulMessage(message);
};

export const showErrorMessage = (duplex: Duplex, message: string): void => {
  showFrontMessage(duplex, message);
  writeErrorMessage(message);
};
