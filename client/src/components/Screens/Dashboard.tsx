import { Switch, Route, Link } from "react-router-dom";
import PartnerForm from "../PartnerForm";
import PlanForm from "../PlanForm";
import ServiceForm from "../ServiceForm";

const Dashboard = () => {
  return (
    <div>
       <div>
        <Link to={`/dashboard/admin/services`}>Services</Link>
        <Link to={`/dashboard/admin/partners`}>Partners</Link>
        <Link to={`/dashboard/admin/plans`}>Plan</Link>
      </div>

      <Switch>
        <Route path="/dashboard/admin/services" component={ServiceForm} />
        <Route path="/dashboard/admin/partners" component={PartnerForm} />
        <Route path="/dashboard/admin/plans" component={PlanForm} />
      </Switch>
    </div>
  );
};

export default Dashboard;
