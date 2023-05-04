import React, { ChangeEvent } from 'react';

interface HeadersEditorProps {
  value: string;
  onHeadersChange: (value: string) => void;
}

const HeadersEditor = ({ value, onHeadersChange }: HeadersEditorProps) => {
  return (
    <div>
      <div>
        <textarea value={value} onChange={(e) => onHeadersChange(e.target.value)}></textarea>
      </div>
    </div>
  );
};

export default HeadersEditor;
