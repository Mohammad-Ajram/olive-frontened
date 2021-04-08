import "antd/dist/antd.css";
import Topnav from "./components/nav/Topnav";
import Footer from "./components/nav/Footer";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js";
import AdminLogin from "./pages/AdminLogin";
import AddProperty from "./pages/admin/AddProperty";
import UpdateProperty from "./pages/admin/UpdateProperty";
import AllProperties from "./pages/admin/AllProperties";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RentSellProperty from "./pages/RentSellProperty";
import FindProperty from "./pages/FindProperty";
import PropertyDetails from "./pages/PropertyDetails";
import ScrollToTop from "./components/ScrollToTop";
import TopProperties from "./pages/TopProperties";
import ResidentialProperties from "./pages/ResidentialProperties";
import CommercialProperties from "./pages/CommercialProperties";
import AgriculturalProperties from "./pages/AgriculturalProperties";
import "./index.css";
import NoMatch from "./pages/NoMatch";

function App() {
  const [token, setToken] = useState("");

  if (!token && sessionStorage.getItem("token"))
    setToken(sessionStorage.getItem("token"));

  return (
    <div className="App">
      <ToastContainer />
      <ScrollToTop />
      <header className="App-header">
        <Topnav token={token} setToken={setToken} />
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/admin-login"
          render={(props) => <AdminLogin {...props} setToken={setToken} />}
        />

        <Route
          exact
          path="/admin/add-property"
          render={(props) => <AddProperty {...props} token={token} />}
        />
        <Route
          exact
          path="/admin/all-properties"
          render={(props) => <AllProperties {...props} token={token} />}
        />
        <Route
          exact
          path="/admin/update-property/:id"
          render={(props) => <UpdateProperty {...props} token={token} />}
        />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route
          exact
          path="/rent-or-sell-property"
          component={RentSellProperty}
        />
        <Route exact path="/find-property" component={FindProperty} />
        <Route exact path="/property-details/:id" component={PropertyDetails} />
        <Route exact path="/top-properties" component={TopProperties} />
        <Route
          exact
          path="/residential-properties"
          component={ResidentialProperties}
        />
        <Route
          exact
          path="/commercial-properties"
          component={CommercialProperties}
        />
        <Route
          exact
          path="/agricultural-properties"
          component={AgriculturalProperties}
        />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
