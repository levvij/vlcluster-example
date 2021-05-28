const express = require("express");

const app = express();

app.get("*", (req, res) => {
    res.send(`hello world\n<pre>${Object.keys(process.env).map(e => `${e}: ${JSON.stringify(process.env[e])}`).join("\n")}</pre>`);
})

app.listen(process.env.PORT, () => {
    console.log(`stared on ${process.env.PORT}!`);
});