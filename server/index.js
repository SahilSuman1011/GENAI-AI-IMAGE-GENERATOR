import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import PostRouter from "./routes/Posts.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({extended: true}));

// error handler
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json({
        success: false,
        status,
        message,
    });
});

app.use("/api/post", PostRouter);

// default route
app.get("/", async (req, res) => {
    res.status(200).json({
        message: "Ram Ram ji",
    });
});

// function to connect mongodb to server
const connectDB = () => {
    console.log("Attempting to connect to MongoDB...");
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000 // Timeout after 5s instead of 30s
    })
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch((err) => {
        console.error("Failed to Connect to MongoDB");
        console.error("Error details:", err);
        if (err.name === 'MongoParseError') {
            console.error("There seems to be an issue with the connection string format.");
        } else if (err.name === 'MongoTimeoutError') {
            console.error("Connection attempt timed out. This could be due to network issues or incorrect credentials.");
        }
        console.error("Connection string:", process.env.MONGODB_URL.replace(/\/\/.*@/, '//<credentials>@')); // Log the connection string without exposing credentials
    });
};

// function to start the server
const startServer = async () => {
    try {
        connectDB();
        const port = process.env.PORT || 8000;
        app.listen(port, () => console.log(`Server started on port ${port}`));
    } catch(error) {
        console.log("Error starting server:", error);
    }
};

startServer();