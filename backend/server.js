
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

// NexPilot AI chat endpoint
app.post("/api/chat", async (req, res) => {
    try {
        const message = req.body.message;

        if (!message || typeof message !== "string") {
            return res.status(400).json({
                error: "Please provide a message."
            });
        }

        const answer =
            "I received your message: " + message +
            ". My AI engine is not connected yet, but my backend is working!";

        res.json({
            reply: answer
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "NexPilot encountered an error."
        });
    }
});

app.listen(PORT, () => {
    console.log("NexPilot running on port " + PORT);
});

