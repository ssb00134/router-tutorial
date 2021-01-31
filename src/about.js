import React from "react";
import qs from "qs";
const about = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const showDetail = query.detail === "true";
  return (
    <div>
      <h1>about</h1>
      <p>이 프로젝트는 라우터 기초를 실습하는 예제 프로젝트</p>
      {showDetail && <p>detail 값 true로 설정</p>}
    </div>
  );
};

export default about;
