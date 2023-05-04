import React from 'react';

interface OperationEditorProps {
  value: string;
  onOperationChange: (value: string) => void;
}

const OperationEditor = ({ value, onOperationChange }: OperationEditorProps) => {
  return (
    <div>
      <textarea value={value} onChange={(e) => onOperationChange(e.target.value)}></textarea>
    </div>
  );
};

export default OperationEditor;
