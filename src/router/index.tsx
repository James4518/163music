import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import { RouteObject } from "react-router-dom";

const Discover = lazy(() => import("@/views/discover"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/discover" />
  },
  {
    path: "/discover",
    element: <Discover />,
    children: []
  }
];

export default routes;
