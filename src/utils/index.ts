import { EOL } from 'os';

export const showMessage = (message: string): void => {
  process.stdout.write(message + EOL);
};
