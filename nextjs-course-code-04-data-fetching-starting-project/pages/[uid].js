import React from "react";

export const UserIdPage = ({ id }) => {
  return <h1>{id}</h1>;
};

export default UserIdPage;

export async function getServerSideProps(context) {
  const { params, req, res } = context;
  const userId = params.uid;
  return {
    props: {
      id: "userid-" + userId,
    },
  };
}
