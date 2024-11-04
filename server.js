const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    todos: {
      id: 1,
      title: "Learn Node",
      completed: false,
    },
    todos2: {
      id: 2,
      title: "Learn React",
      completed: false,
    },
    todos3: {
      id: 3,
      title: "Learn Express",
      completed: false,
    },
    todos4: {
      id: 4,
      title: "Learn GraphQL",
      completed: false,
    },
  });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
