// import dependencies
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";

// import libraries]
import connectDB from "./config/db.js";
import kpiRoutes from "./routes/kpi.js";
import KPI from "./models/KPI.js";
import { kpis } from "./data/data.js";

// Config
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/kpi", kpiRoutes);

// MongoDB
const port = process.env.PORT || 9000;
connectDB().then(async () => {
  app.listen(port, () => console.log(`Server Up on : ${port}`));

  // Add data onetime only ort as need
  // await mongoose.connection.db.dropDatabase();
  // KPI.insertMany(kpis);
});
