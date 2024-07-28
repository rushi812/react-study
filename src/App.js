import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
/**
 * Creating React element using React.createElement
 * React.createElement => ReactElement - JS Object => HTMLElement(render)
 */

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child", key: "child1" }, [
//     React.createElement(
//       "h1",
//       { id: "heading1", key: "heading1" },
//       "I'm a h1 tag!"
//     ),
//     React.createElement(
//       "h2",
//       { id: "heading2", key: "heading2" },
//       "I'm a h2 tag!"
//     ),
//   ]),
//   React.createElement("div", { id: "child2", key: "child2" }, [
//     React.createElement(
//       "h1",
//       { id: "heading1", key: "heading1" },
//       "I'm a h1 tag!"
//     ),
//     React.createElement(
//       "h2",
//       { id: "heading2", key: "heading2" },
//       "I'm a h2 tag!"
//     ),
//   ]),
// ]);

/**
 * Creating React element using JSX
 * JSX Element => Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLElement(render)
 */

// const parent = (
//   <div id="parent">
//     <div id="child1">
//       <h1 id="heading1">I'm a h1 tag!</h1>
//       <h2 id="heading2">I'm a h2 tag!</h2>
//     </div>
//     <div id="child2">
//       <h1 id="heading1">I'm a h1 tag!</h1>
//       <h2 id="heading2">I'm a h2 tag!</h2>
//     </div>
//   </div>
// );

// const Title = () => {
//   return <h1 className="heading">Hello from Title Component</h1>;
// };

// const HeadingComponent = () => {
//   return (
//     <div className="container">
//       <Title />
//       <h1>Hello from Heading Component!</h1>
//       {parent}
//     </div>
//   );
// };

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "restaurant/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
