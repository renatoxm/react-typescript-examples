type User = {
  user?: { name: string };
};

const LoggedMsg = ({ user }: User) => {
  return user ? <>Hello {user.name}</> : <>User is not logged in</>;
};

export default LoggedMsg;
