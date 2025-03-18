import { ReactElement } from "react";
import { Route } from "react-router-dom";
import ProtectedRoute from "../routes/ProtectedRoute";

export interface IRoute {
    path?: string;
    element?: ReactElement;
    children?: IRoute[];
}

export const buildRoutes = (routes: IRoute[], access: "private" | "public" = "public") => {
    return routes.map(({ path, element, children }) => (
        <Route
            key={path || "index"}
            path={path} // Remove `path` for index routes
            element={
                access === "public" ? element : element ? <ProtectedRoute>{element}</ProtectedRoute> : null
            }
        >
            {children && buildRoutes(children, access)}
        </Route>
    ));
};
