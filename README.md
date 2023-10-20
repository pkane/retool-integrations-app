# Welcome to the Retool Integrations Exercise!

This private repo is for the solution for the Design Engineer, Web Presence Takehome Exercise.

## Approach

I really enjoyed this exercise! I opted to go with a Create React App starter template as it's a comfortable starting point and easy to get up and running. 
I chose to use React's Styled Components as they are easily integrated into any component and easily make edits as well as leverage consistent SCSS conventions.
For the main Integrations layout, I leveraged a technique I've used previously for the "infinite" scrolling effect. This technique requires a specific width for each parent container but features two identical child rows that repeat inline, creating the effect.
I thought it would be visually unique if alternating rows had different speeds, and staggered them by using a negative `animation-duration` value.
I gave each row independent hover, making it fun to interact with them. Each "pill" animates slightly as well as the shadow under darkens, simulating a real hover.
On click, a modal loads which I closely matched to the Figma comp as well. I decided against an animation as I think the default UX is better with snappier on/off movement.

Areas for improvement would be tabbing functionality, as well as the ability to close the modal by clicking anywhere on the screen. I'd also like to use the "Escape" key to close but that is possibly an inconsistent practice.
I added a blur effect behind the modal as a style choice, but there could be some framerate concerns with this sitting atop the animation. I would recommend doing some performance testing to find out. Additionally the animation might be optimized with translation instead of animating 'left' property.
Code wise, there are lots of ways to improve things for maintainability, like separating icon and component styles as well as moving some of the state/controller logic to separate files. 
One note about the Integration icons: I used the same SVGs for both, but noticed the `viewBox`es are actually different between the main and modal implementations within Figma. This creates a visual disparity within their container, so to counteract this I leveraged a slight CSS scale transform.

Below are instructions for running the project. Please let me know if you have any trouble running this and I will work to troubleshoot with you straightaway!

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
#
