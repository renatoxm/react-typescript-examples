import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

type Props = {
  codeString: string;
};
const Codeblock = ({ codeString }: Props) => {
  return (
    <div className="max-w-2xl">
      <SyntaxHighlighter language="javascript" style={vs2015}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default Codeblock;
