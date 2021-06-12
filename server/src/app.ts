import express from "express";
import morgan from "morgan";

//Routes
import AdminRoutes from "./routes/admin.routes";



const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/admin/", AdminRoutes);

app.listen(5000, () => {
  console.log("The application is listening on port 5000!");
});

export default app;
