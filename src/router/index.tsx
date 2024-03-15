import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import { RouteObject } from "react-router-dom";

const Discover = lazy(() => import("@/views/discover"));
const Download = lazy(() => import("@/views/download"));
const Focus = lazy(() => import("@/views/focus"));
const Mine = lazy(() => import("@/views/mine"));
const Album = lazy(() => import("@/views/discover/c-views/album"));
const Artists = lazy(() => import("@/views/discover/c-views/artists"));
const Djradio = lazy(() => import("@/views/discover/c-views/djradio"));
const Raking = lazy(() => import("@/views/discover/c-views/raking"));
const Recommend = lazy(() => import("@/views/discover/c-views/recommend"));
const Songs = lazy(() => import("@/views/discover/c-views/songs"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/discover" />
  },
  {
    path: "/discover",
    element: <Discover />,
    children: [
      {
        path: "/discover",
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: "/discover/album",
        element: <Album />
      },
      {
        path: "/discover/artists",
        element: <Artists />
      },
      {
        path: "/discover/djradio",
        element: <Djradio />
      },
      {
        path: "/discover/ranking",
        element: <Raking />
      },
      {
        path: "/discover/recommend",
        element: <Recommend />
      },
      {
        path: "/discover/songs",
        element: <Songs />
      }
    ]
  },
  {
    path: "/download",
    element: <Download />
  },
  {
    path: "/focus",
    element: <Focus />
  },
  {
    path: "/mine",
    element: <Mine />
  }
];

export default routes;
