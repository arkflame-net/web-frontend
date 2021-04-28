// Providers and components
import { Fragment } from "react";
import Route from './components/utils/SmartRoute';

// Pages
import Category from "./pages/Category.jsx";
import Community from "./pages/Community.jsx";
import Home from "./pages/Home.jsx";

export default function Router (props) {
    return (
        <Fragment>
            <Route
                {...props}
                path="/"
                exact
                Component={Home}
            />

            <Route
                {...props}
                path="/store/category"
                Component={Category}
            />

            <Route
                {...props}
                path="/community"
                exact
                Component={Community}
            />
        </Fragment>
    )
}