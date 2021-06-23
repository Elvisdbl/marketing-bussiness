import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./components/Screens/Home";
import ServiceDetails from "./components/Screens/ServiceDetails";
import Dashboard from "./components/Screens/Dashboard";
import Contract from "./components/Screens/Contract";

function App() {
  const NoMatchPage = () => {
    return (
      <div>
        <h3>404 - Not found</h3>
        <Link to={`/`} className="btn-green">Go to the home</Link>
      </div>
      
    );
  };
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/service/:id" component={ServiceDetails} />
        <Route path= "/contract/:id" component={Contract} />
        {/* Admin Routes */}
        <Route path="/dashboard/admin" component={Dashboard} />
        <Route component={NoMatchPage} />
      </Switch>
    </>
  );
}

export default App;
