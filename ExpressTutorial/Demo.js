import user from "./routeContoller.js";
import express from "express";
import path from 'path';
const PORT = 5556;
const app = express();
app.get("/", (req, res) => {
    const homepage=path.join(import.meta.dirname,"index.html");
    res.sendFile(homepage);
});
//Dynamic route
app.get("/user/:username", user);
app.listen(PORT, () => {
  console.log(`Server is running at https://localhost${PORT}`);
});
