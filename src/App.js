import React from "react";
import { Route, Link } from "react-router-dom";
import About from "./about";
import Home from "./Home";
import Profile from "./Profile";
const App = () => {
  return (
    <div>
      <ui>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/profile/velopert">velopert 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">gildong 프로필</Link>
        </li>
      </ui>
      <hr />
      <Route path="/" component={Home} exact={true}></Route>
      <Route path={["/about", "/info"]} component={About}></Route>
      <Route path="/profile/:username" component={Profile}></Route>
    </div>
  );
};

export default App;
