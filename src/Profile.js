import React from "react";

const data = {
  velopert: {
    name: "안영준",
    description: "si 개발자",
  },
  gildong: {
    name: "홍길동",
    description: "고전소설 주인공",
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const Profile = data[username];
  if (!Profile) {
    return <div>존재하지 않는 사용자 입니다.</div>;
  }
  console.log(`username : ${username}`);
  return (
    <div>
      <h3>
        {username}({Profile.name})
      </h3>
      <p>{Profile.description}</p>
    </div>
  );
};

export default Profile;
