import express from "express";
import morgan from "morgan";

//Routes
import AreaRoutes from "./routes/area.routes";
import UserRoutes from "./routes/user.routes";
import OrderRoutes from "./routes/order.routes";
import PlanRoutes from "./routes/plan.routes";
import ServiceRoutes from "./routes/service.routes";
import PartnerRoutes from "./routes/partner.routes";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/partner", PartnerRoutes);
app.use("/area", AreaRoutes);
app.use("/user", UserRoutes);
app.use("/order", OrderRoutes);
app.use("/plan", PlanRoutes);
app.use("/service", ServiceRoutes);

app.listen(5000, () => {
  console.log("The application is listening on port 5000!");
});

export default app;
