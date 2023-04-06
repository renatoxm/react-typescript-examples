import Users from '../utils/users.json';

const UserList = () => {
  type User = {
    id: number;
    name: string;
    email: string;
    company: string;
    country: string;
    text: string;
  };
  const users: User[] = Users;

  return (
    <ul>
      {users.map((user: User) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
