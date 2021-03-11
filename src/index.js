import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
// import shortid from "shortid";
import products from "./routes/products";

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(
  process.env.MONGODB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  console.log("Connected to database")
);

app.use("/products", products);

app.get("/", (req, res) => res.json({ name: "mounika" }));

app.listen(8080, () => console.log("server started at 8080"));
