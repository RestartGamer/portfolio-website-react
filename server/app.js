import express from "express"
import cors from "cors"
import messageRoutes from "./routes/messageRoutes.js"

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/api/messages", messageRoutes);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});