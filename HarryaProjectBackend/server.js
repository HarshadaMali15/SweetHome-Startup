import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import rateLimit from "express-rate-limit"
import path from "path"
import connectDB from "./config/db.js"

import authRoutes from "./routes/authRoutes.js"
import sellerRoutes from "./routes/sellerRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import cartRoutes from "./routes/cartRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import adminRoutes from "./routes/admin.js"
import feedbackRoutes from "./routes/feedbackRoutes.js"

dotenv.config()

connectDB()
  .then(() => console.log("✅ DB Connected"))
  .catch(err => console.error("❌ DB error", err.message))

const app = express()
app.set("trust proxy", 1);
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://gentle-gecko-4995b3.netlify.app"
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
)
app.use(morgan("dev"))
app.use(express.json())
app.use(cookieParser())

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 2000,
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req) => req.path.startsWith("/api/auth")
})

app.use("/api/products", limiter)
app.use("/api/cart", limiter)
app.use("/api/orders", limiter)

// Routes
app.use("/api/auth", authRoutes)
app.use("/api/seller", sellerRoutes)
app.use("/api/products", productRoutes)
app.use("/api/cart", cartRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/admin", adminRoutes)
app.use("/api/feedback", feedbackRoutes)

// Serve uploaded images from the "uploads" directory
app.use("/uploads", express.static("uploads"))

// Backward compatibility: serve old images that were stored under /tmp/uploads
app.use("/tmp/uploads", express.static(path.join("/tmp", "uploads")))

app.get("/", (req, res) => {
  res.send("SweetHome backend is running!");
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})

export default app