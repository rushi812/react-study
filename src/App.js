import React, { useState, useEffect, useContext, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

const About = lazy(() => import("./components/About"));
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  const { loggedInUser } = useContext(UserContext);
  // Authentication
  useEffect(() => {
    // auth code
    const data = {
      loggedInUser: "Rushiraj Brahmbhatt",
    };

    setUserName(data.loggedInUser);
  }, []);

  return (
    <div>
      <h1>{loggedInUser}</h1>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="flex flex-col gap-5">
          <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}>
            <Header />
          </UserContext.Provider>
          <div className="p-4">
            <Outlet />
          </div>
        </div>
      </UserContext.Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      { path: "/contact", element: <Contact /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "restaurant/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
