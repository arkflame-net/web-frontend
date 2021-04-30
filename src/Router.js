// Providers and components
import { Fragment } from "react";
import Route from "./components/utils/SmartRoute";

// Pages
import Basket from "./pages/Basket.jsx";
import Category from "./pages/Category.jsx";
import Community from "./pages/Community.jsx";
import Home from "./pages/Home.jsx";
import Stats from "./pages/Stats.jsx";

export default function Router(props) {
  return (
    <Fragment>
      <Route {...props} path="/" exact Component={Home} />

      <Route {...props} path="/community" exact Component={Community} />

      <Route {...props} path="/store/basket" Component={Basket} />

      <Route {...props} path="/store/category" Component={Category} />

      <Route {...props} path="/stats" Component={Stats} />
    </Fragment>
  );
}

