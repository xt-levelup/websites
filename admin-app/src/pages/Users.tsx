import { FC } from "react";
import { Helmet } from "react-helmet";

const Users: FC = () => {
  return (
    <div>
      <Helmet>
        <title>User List Page</title>
      </Helmet>
      <h2>Users</h2>
    </div>
  );
};

export default Users;
