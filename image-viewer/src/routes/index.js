import { lazy, Suspense } from "react";

const Loadable = (Component) => (props) =>
(
    <Suspense fallback={<div>Loading</div>}>
        <Component {...props} />
    </Suspense>
);

const Home = Loadable(
    lazy(() => import("pages/Home").then((module) => ({ default: module.Home })))
);

const routes = [
    {
        path: "/",
        element: <Home />,
    }
];

export default routes;
