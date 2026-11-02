
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        name: "NexPilot",
        status: "Online",
        version: "2.0"
    });
});

app.get("/api/health", (req, res) => {
    res.json({
        status: "healthy",
        message: "NexPilot backend is running!"
    });
});

app.listen(PORT, () => {
    console.log(`NexPilot running on port ${PORT}`);
});
