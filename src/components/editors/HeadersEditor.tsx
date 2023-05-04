import React, { ChangeEvent } from 'react';

interface HeadersEditorProps {
  value: string;
  onHeadersChange: (value: string) => void;
}

const HeadersEditor = ({ value, onHeadersChange }: HeadersEditorProps) => {
  return (
    <div>
      <textarea value={value} onChange={(e) => onHeadersChange(e.target.value)}></textarea>
    </div>
  );
};

export default HeadersEditor;
