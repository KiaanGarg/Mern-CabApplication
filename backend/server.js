import express from "express"
import dotenv from "dotenv"
import colors from "colors"
import morgan from "morgan"
import connectDB from "./config/db.js"

// setup environment varibales

const app = express() // initialize the app
dotenv.config({ path: "./backend/config/config.env" })
connectDB()

// import routes
import cabRoutes from "./routes/cab/cabRoutes.js"
import userRoutes from "./routes/users/userRoutes.js"

// setup middlewares
app.use(express.json()) // accept json body object
app.use(morgan("dev")) // show request logs in console

// declare routes

app.use("/api/v1/cab", cabRoutes) // http://localhost:5000/api/v1/cab - get request
app.use("/api/v1/user", userRoutes) // http://localhost:5000/api/v1/user - get request

// if we are in production set the build folder as static folder and send the index.html  //
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")))
  app.get("*", (req, res, next) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  )
} else {
  app.get("/", (req, res, next) => {
    res.send("API is running...")
  })
}

// setup port
const PORT = process.env.PORT || 5000
const NODE_ENV = process.env.NODE_ENV

// setup connection
app.listen(PORT, () => {
  console.log(
    `SERVER IS LISTINING ON PORT ${PORT} IN ${NODE_ENV} ENVIRONMENT`.green.bold
  )
})
