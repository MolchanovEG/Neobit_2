const express = require("express");
const sequelize = require("./config/db");
const newsRoutes = require("./routes/newsRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/api", newsRoutes);

const PORT = process.env.DB_PORT;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
