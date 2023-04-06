type Props = {
  children?: React.ReactNode;
  onClick: () => void;
};

const Button = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="max-w-sm bg-cyan-400 hover:bg-cyan-300 text-black font-bold py-2 px-4 rounded"
    >
      {children}
    </button>
  );
};

export default Button;
