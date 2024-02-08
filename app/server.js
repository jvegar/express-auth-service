const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");

const app = express();

const corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

//  pase requests of content-type - application/x-www-form-urlenconded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "jvegar-session",
    keys: ["COOKIE_SECRET"],
    httpOnly: true,
  })
);

// routes
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);

const dbConfig = require("./config/db.config");
const db = require("./models");
const Role = db.role;

db.mongoose
  .connect(
    `mongodb://${dbConfig.USERNAME}:${dbConfig.PASSWORD}@${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}?authSource=admin`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Successuflly connect to MongoDB.");
    initial();
  })
  .catch((err) => {
    console.error("Connectionerror", err);
    process.exit();
  });

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}

//simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to jvegar application." });
});

//set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
