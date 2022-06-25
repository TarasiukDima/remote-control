# RSSchool NodeJS websocket task template
> Static http server and base task packages.

## Installation
 1. Download repo.
   - git clone git@github.com:TarasiukDima/remote-control.git
  2. Change folder path.
   - cd remote-control
  3. Download all branches.
   -  git pull --all
  4. Change actual branch.
   - git checkout develop
  5. Install dependencies.
   - npm install
  6. Rename file from .env.default to .env

## Usage
**Development**

`npm run start`

* App served @ `http://localhost:3030` with nodemon

## Information:
- http://localhost:3030/ - url front. Default port 3030. You can change it in file .env
- Default WebSocket port 8080. You can change it in file .env
- Keyboard layout Eng.

## Check tasks:
  1. Start the project. npm run start
  2. Open the built-in Windows paint or any similar program.
  3. Place the page with front on one half of the screen, paint on the other half of the screen.
  4. Make the window with front active.
  5. Hover the mouse over the paint area.
  6. Press c or r or s. Or the arrow keys.


## Project commands:
  - arrow up - moves the mouse pointer up by the specified number of pixels.
  - arrow down - moves the mouse pointer down by the specified number of pixels.
  - arrow left - moves the mouse pointer by the specified number of pixels to the left.
  - arrow right - moves the mouse pointer by the specified number of pixels to the right.
  - p - displays the current cursor position in the console.
  - s - draws a square.
  - r - draws a rectangle.
  - c - draws a circle.
  - Cntr + P - returns screenshot.