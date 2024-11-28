import express from "express";
import dotenv from "dotenv";
dotenv.config();
import userRouter from "./routes/userRouter.js";
import categoryRoute from "./routes/categoryRoute.js";
import subcategoryRoute from "./routes/subcategoryRoute.js"
import blogsRouter from "./routes/blogsRouter.js"
import { notFound, errorHandle } from "./middleware/errorMiddleware.js";
import { db } from "./config/db.js";
import cookieParser from "cookie-parser";

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRouter);
app.use("/api/category", categoryRoute)
app.use("/api/subcategory", subcategoryRoute)
app.use("/api/blogs", blogsRouter)
db();

app.use(notFound);
app.use(errorHandle);

app.get("/", (req, res) => res.send("Server is ready"));

app.listen(port, () => console.log("Server run on port: ", port));
