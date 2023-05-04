import React, { ChangeEvent } from 'react';

interface VariablesEditorProps {
  value: string;
  onVariablesChange: (value: string) => void;
}

const VariablesEditor = ({ value, onVariablesChange }: VariablesEditorProps) => {
  return (
    <div>
      <div>
        <textarea value={value} onChange={(e) => onVariablesChange(e.target.value)}></textarea>
      </div>
    </div>
  );
};

export default VariablesEditor;
