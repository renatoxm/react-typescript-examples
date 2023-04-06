import React from 'react';

type Props = {
  children?: React.ReactNode;
};
const Post = ({ children }: Props) => {
  return <div>&bull; {children}</div>;
};

export default Post;
