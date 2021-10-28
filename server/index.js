import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import todoRoutes from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/todos", todoRoutes);

const CONNECTION_URL =
  "mongodb+srv://nivedha:nivedha@cluster0.0betc.mongodb.net/TodosDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5001;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
//mongoose.set("useFindAndModify", false);
