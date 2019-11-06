# Stock Tracker App

A simple app for tracking purchased stock performance over time.

Planned capabilities include:

* Tracking one or more stock purchases including stock symbol, purchase price and quantity
* Retrieving stock information from third-party API (ex. current price, dividend information)
* Calculating market value, capital gain/loss percentage
* Calculating net gain/loss including received dividends
* Dividend projections

## Architecture

* Front-end UI is built with React.
* Back-end server and API is built with Express on Node.js.
* Database is ???.
* **In development**, hot reload is supported on front-end and back-end changes.
* **In production**, the React app is served as a static build from the Express server (no server-side rendering) alongside the API to avoid cross-origin resource sharing.

## Available Scripts

In the project directory, you can run:

### `npm start`

* Runs the front-end in development mode with hot reload when changes are made.
* Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
* Any paths requested by the front-end app that do not resolve are proxies to the back-end server.
* You will also see any lint errors in the console.

### `npm test`

* Launches the front-end test runner in interactive watch mode.
* See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

* Builds the app for production to the `build` folder.
* It correctly bundles React in production mode and optimizes the build for the best performance.
* The build is minified and the filenames include the hashes.
* See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

* **This is a one-way operation. Once you `eject`, you can’t go back!**
* If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project and copy all configuration files and transitive dependencies into the project so you have ful control. 
* Read more about ejecting [here](https://create-react-app.dev/docs/available-scripts#npm-run-eject).

### `npm run server`

* Runs the backend Express server using with hot reload when changes are made.
* Open  [http://localhost:3001/api](http://localhost:3001/api) to test the back-end.

### `npm run all`

* Runs the front-end and back-end processes together with hot reload when either front or back-end changes are made.
* No cross-origin resource sharing required thanks to the proxy setup.
