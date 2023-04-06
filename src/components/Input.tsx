type Props = {
  ref?: React.RefObject<HTMLInputElement>;
  id?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const Input = ({
  onChange,
  ref,
  id,
  type = 'string',
  value,
  placeholder,
  required,
}: Props) => {
  return (
    <input
      onChange={onChange}
      ref={ref}
      type={type}
      value={value}
      id={id}
      className="mb-2 max-w-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder={placeholder}
      required={required}
    />
  );
};

export default Input;
