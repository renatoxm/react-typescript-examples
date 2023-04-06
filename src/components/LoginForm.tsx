import { useRef } from 'react';
import Button from './Button';
import Input from './Input';

const LoginForm = ({ onSubmit }: { onSubmit: (value: string) => void }) => {
  const inputElement = useRef<HTMLInputElement>(null);
  const focusInput = () => {
    if (inputElement.current !== null) {
      if (inputElement.current.value === '') inputElement.current.focus();
    }
  };
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (
      inputElement.current !== null &&
      onSubmit &&
      typeof onSubmit === 'function'
    ) {
      onSubmit(inputElement.current.value);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4 p-4">
        <div>
          <Input
            ref={inputElement}
            id="first_name"
            placeholder="Login"
            required
          />
        </div>
        <Button onClick={focusInput}>Log In</Button>
      </div>
    </form>
  );
};

export default LoginForm;
