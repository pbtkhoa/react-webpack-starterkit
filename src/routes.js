import { lazy } from "react";

const Home = lazy(() => import("./containers/HomeContainer"));

const AlbumList = lazy(() => import("./containers/Album/ListContainer"));

const AlbumDetail = lazy(() => import("./containers/Album/DetailContainer"));

const Login = lazy(() => import("./containers/Auth/LoginContainer"));

export default [
  {
    component: Home,
    path: "/",
    exact: true
  },
  {
    component: AlbumList,
    path: "/album",
    exact: true
  },
  {
    component: AlbumDetail,
    path: "/album/:id",
    exact: true
  },
  {
    component: Login,
    path: "/auth/login",
    exact: true
  }
];
