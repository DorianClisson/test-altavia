import { useEffect } from "react";
import { getUsers } from "./webServices";

const User = (props) => {
  const { user } = props;

  return (
    <>
      <p>ID: {user.id}</p>
      <p>Firstname: {user.firstName}</p>
    </>
  );
};

const Users = () => {
  const [users, setUsers] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getUsers()
      .then((users) => {
        setUsers(users);
      })
      .catch()
      .finally(() => {
        setIsLoaded(true);
      });
  }, []);

  return (
    <div>
      {!isLoaded ? (
        <p>...</p>
      ) : users ? (
        users.map((user) => {
          return <User key={user.id} user={user} />;
        })
      ) : (
        <p>No users</p>
      )}
    </div>
  );
};

export default Users;
