import "antd/dist/antd.css";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { lazy, Suspense } from "react";
const Topnav = lazy(() => import("./components/nav/Topnav"));
const Footer = lazy(() => import("./components/nav/Footer"));

const Home = lazy(() => import("./pages/Home.js"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const AddProperty = lazy(() => import("./pages/admin/AddProperty"));
const UpdateProperty = lazy(() => import("./pages/admin/UpdateProperty"));
const AllProperties = lazy(() => import("./pages/admin/AllProperties"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));

const RentSellProperty = lazy(() => import("./pages/RentSellProperty"));
const FindProperty = lazy(() => import("./pages/FindProperty"));
const PropertyDetails = lazy(() => import("./pages/PropertyDetails"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));
const TopProperties = lazy(() => import("./pages/TopProperties"));
const ResidentialProperties = lazy(() =>
  import("./pages/ResidentialProperties")
);
const CommercialProperties = lazy(() => import("./pages/CommercialProperties"));
const AgriculturalProperties = lazy(() =>
  import("./pages/AgriculturalProperties")
);

const NoMatch = lazy(() => import("./pages/NoMatch"));

function App() {
  const [token, setToken] = useState("");

  if (!token && sessionStorage.getItem("token"))
    setToken(sessionStorage.getItem("token"));

  return (
    <div className="App">
      <Suspense
        fallback={
          <div className="loading-container">
            <div
              className="loader"
              style={{ fontSize: "48px", color: "rgb(2, 74, 54)" }}
            >
              <LoadingOutlined />
            </div>
          </div>
        }
      >
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
          <Route
            exact
            path="/property-details/:id"
            component={PropertyDetails}
          />
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
      </Suspense>
    </div>
  );
}

export default App;
