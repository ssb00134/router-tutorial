import React from "react";
import { Link, Route } from "react-router-dom";
import Profile from "./Profile";

const profiles = () => {
  return (
    <div>
      <h3>사용자 목록 : </h3>
      <ui>
        <li>
          <link to="/profiles/velopert">velopert</link>
        </li>
        <li>
          <link to="/profiles/gildong">gildong</link>
        </li>
      </ui>
      <Route
        path="/proflies"
        exat
        render={() => <div>사용자를 선택해 주세요</div>}
      />
    </div>
  );
};

export default profiles;
