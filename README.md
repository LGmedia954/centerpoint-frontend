# CenterPoint - Front End

A React project inspired by regional business chambers of commerce and their related community activities.

Backend Repository: https://github.com/LGmedia954/centerpoint-backend

NASA Landsat satellite global mosaic image of Long Island, New York. Public domain. Courtesy: Wikimedia Commons.

# How To Use This Application

To use this app, clone the Front End repository and run npm install to install Node dependencies. Then run npm start.

Clone the Back End repository and run bundle install to install necessary gems. Run rake db:migrate and rake db:seed to populate the database.

Run rake start to launch the client and API servers. Navigate to http://localhost:3001 to view the React app.

# Project Requirements

- The code should be written in ES6 as much as possible.
- Use the create-react-app generator to start your project.
- Your app should have one HTML page to render your react-redux application.
- There should be 5 stateless components.
- There should be 3 routes.
- The Application must make use of react-router and proper RESTful routing.
- Use Redux middleware to respond to and modify state change.
- Make use of async actions and redux-thunk middleware to send data to and receive data from a server
- Your Rails API should handle the data persistence with a database. You should be using fetch() within your actions to GET and POST data from your API. Do not use jQuery methods.
- Your client-side application should handle the display of data with minimal data manipulation.
- Your application should have some minimal styling.
