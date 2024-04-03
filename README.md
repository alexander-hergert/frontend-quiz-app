# Frontend Mentor Quiz App

## To install this project

- Please remove the .git file by using command "rm -rf .git"
- Then use "git init" again
- Then "npm install" or "yarn install"
- Then "npm update" or "yarn upgrade"

## Used Technologies...

## Frontend Technologies

### [Next.js](https://nextjs.org/)

... is a JavaScript framework for building web applications. Developed by Vercel, it enables the creation of dynamic and interactive user interfaces with reusable components. Ideal for crafting modern and efficient front-end experiences with server-side rendering and routing capabilities.

### [Tailwind-CSS](https://tailwindcss.com/docs/guides/vite)

... simplifies styling in your React application by using classnames.

### [Vercel](https://vercel.com/)

... is a cloud platform for deploying web applications. It provides seamless deployment and hosting solutions for front-end projects, offering features like automatic scaling, continuous deployment, and edge caching. Developed by the creators of Next.js, Vercel specializes in optimizing the deployment process for modern web applications, making it easy to deliver high-performance experiences to users worldwide.

## Project Overview

The project is representing a quiz app for developers where users can pick up a topic and test their knowledge.

## Paths of the application

/ - home route
/topic - url to topics (html, css, javascript, accessibility, react, nodejs, sql, git)

## General overview of the app

![Home](/public/assets/images/quiz-tablet.png)
![Homemobile](/public/assets/quiz-mobile.png)

On the Homepage of the app the users can select a topic to test their knowledge.
In addition to challenge myself I have add settings and more topics and more questions to the app.

_Feel free to use the data.json and the questions if you like them. The questions are AI generated. Except for the starter questions which came from Frontend Mentor_

In total the app does cover 8 topics with at least 50 different questions in each topic. The app is easily expandable by just adding more questions to the data.json.

The settings one can set on the bottom are stored locally on the browser.

The setting modes are:

- Shuffle: This mode does mix the questions and the options each time you start a quiz and makes it hard to memorize correct positions to test your skills better.

- Number: You can select here how many questions you want to be asked. You can pick 10, 20 and 30.

- Exam mode: This mode does add a little more difficulty to the quiz and adds a timer to the quiz. You are also not allowed to copy the questions or options to google them for example.

- Mix mode: The mixmode is the most interesting part. By setting it to on you can select the topic you want have in your quiz to test a broader part of your knowledge in one quiz. Activating it with exam mode can add some nice challenge here. Mix mode also by default runs in shuffle mode.

![Quiz](/public/assets/images/quiz-desktop.png)

In the quiz path /topic you are able to play the quiz. After finishing all questions you can see the final result and then play again.
