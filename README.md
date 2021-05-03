## Billie Mission

This is a code challenge I did for a company that renders list from the redux store to the UI. It also activates a modal when a list is clicked to allow editing of the budget field after which the UI gets updated from redux. It was built with React, Redux (I made use of the redux toolkit that creates slices), HTMl and Tailwindcss.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Status

This project is currently in developement. The list and modal functionality is complete however, the add new list is in progress.

## Available Scripts

To clone down this repository. You will need node and npm installed globally on your machine.

Installation:

### `npm install`

To run test suite:

### `npm test`

In the project directory, you can run to start server:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

To visit app:

### `https://github.com/amakomitchell/billie-challenge`

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Reflection

This was a week long project built during a code challenge. Project goals included using technologies learned up until this point and familiarizing myself with documentation for new features.

Originally, I wanted to build this project with just React before reading the instruction of making redux a posibility. I started this process by using the `create-react-app` boilerplate, then adding react-router-4.0 and redux.

One major challenge I experienced was using Redux especially with the redux toolkit that used slices which was not the way the little redux I learnt was setup.

At the end of the day, the technologies implemented in this project are React, React-Router 4.0, Redux, and a significant amount of JSX, and tailwindcss. I chose to use the `npx create-react-app my-app --template redux` boilerplate to minimize initial setup and invest more time in diving into weird technological rabbit holes. In the next iteration I plan on handrolling a webpack.config.js file to more fully understand the build process.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
