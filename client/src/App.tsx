import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Screens/Home";
import ServiceDetails from "./components/Screens/ServiceDetails";
import PlansDetails from "./components/Screens/PlansDetails";
import Dashboard from './components/Screens/Dashboard';



function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/service/:id" component={ServiceDetails} />
        <Route path="/plan/:id" component={PlansDetails} />

        {/* End */}
        <Route path="/dashboard/admin" component={Dashboard}/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
