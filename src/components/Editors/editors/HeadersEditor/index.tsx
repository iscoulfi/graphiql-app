import { Editor, OnChange } from '@monaco-editor/react';
import { editorOptions } from 'config';

interface HeadersEditorProps {
  value: string;
  onHeadersChange: (value: string) => void;
}

export const HeadersEditor = ({ value, onHeadersChange }: HeadersEditorProps) => {
  const onChange: OnChange = (value) => onHeadersChange(value ?? '');

  return (
    <div>
      <Editor language="json" value={value} options={editorOptions} onChange={onChange} />
    </div>
  );
};
