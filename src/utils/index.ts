import { EOL } from 'os';
import { Duplex } from 'stream';

export const showMessage = (message: string): void => {
  process.stdout.write(message + '\0' + EOL);
};

export const showFrontMessage = (duplex: Duplex, message: string) => {
  duplex.write(`${message} \0`);
};
