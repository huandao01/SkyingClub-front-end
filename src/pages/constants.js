import Authorization from "@components/Authorization";
import React, { Suspense } from "react";

// home page
const Home = React.lazy(() => import("@pages/site/home"));
const Shop = React.lazy(() => import("@pages/site/shop"));
const Sport = React.lazy(() => import("@pages/site/sport"));
const Rank = React.lazy(() => import("@pages/site/rank"));

// authentication
const Login = React.lazy(() => import("@pages/auth/login"));
const Register = React.lazy(() => import("@pages/auth/register"));

// admin
const Bill = React.lazy(() => import("@pages/admin/bill"));

const Page =
  (Component, roles = []) =>
  (props) => {
    return (
      <Suspense fallback={<div></div>}>
        <Authorization accessRoles={roles} isCheckRoute>
          <Component {...props} />
        </Authorization>
      </Suspense>
    );
  };

export const route_home_page = [
  {
    component: Page(Home, []),
    accessRoles: [],
    path: ["/skyingclub/home"],
    exact: true,
  },
  {
    component: Page(Shop, []),
    accessRoles: [],
    path: ["/skyingclub/shop"],
    exact: true,
  },
  {
    component: Page(Sport, []),
    accessRoles: [],
    path: ["/skyingclub/sport"],
    exact: true,
  },
  {
    component: Page(Rank, []),
    accessRoles: [],
    path: ["/skyingclub/rank"],
    exact: true,
  },
];

export const route_auth = [
  {
    component: Page(Login, []),
    accessRoles: [],
    path: ["/auth/login"],
    exact: true,
  },
  {
    component: Page(Register, []),
    accessRoles: [],
    path: ["/auth/register"],
    exact: true,
  },
];

export const route_admin = [
  {
    component: Page(Bill, []),
    accessRoles: [],
    path: ["/admin/bill"],
    exact: true,
  },
];

export const theme = {};
