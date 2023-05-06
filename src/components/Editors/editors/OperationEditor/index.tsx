import CodeMirrorWrapper from './CodemirrorWrapper';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

interface OperationEditorProps {
  value: string;
  onOperationChange: (value: string) => void;
}

export const OperationEditor = ({ value, onOperationChange }: OperationEditorProps) => {
  return (
    <div>
      <CodeMirrorWrapper mode="graphql" value={value} onChange={(e) => onOperationChange(e)} />
    </div>
  );
};
