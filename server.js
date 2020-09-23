const express = require('express');
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;


const app = express();
mongoose.connect("mongoosedb://localhost/dbworkout", {
    useNewUrlParser: true,
    useFindAndModify: false
})
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes and give the server access to them.
const routes = require('./routes');
// require('./routes/html-routes.js')(app);

app.use(routes);

// Start our server so that it can begin listening to client requests.

  app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log('Server listening on: http://localhost:' + PORT);
  });
