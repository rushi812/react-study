import React from "react";
import ReactDOM from "react-dom/client";

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

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="https://img.freepik.com/free-vector/flat-design-antojitos-logo-design-template_23-2149599172.jpg" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <div className="res-image">
        <img
          alt="res-logo"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"
        />
      </div>
      <div className="res-info">
        <h3 className="res-title">Chinese Wok</h3>
        <h4 className="res-rating">
          <span>4.2 Stars • </span>
          <span>20-25 mins</span>
        </h4>
        <h4 className="res-cuisine">Chinese, Asian, Tibetan, Desserts</h4>
        <h4 className="res-address">CG Road</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search...</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
