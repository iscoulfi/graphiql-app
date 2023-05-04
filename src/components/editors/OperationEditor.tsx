import React from 'react';
import styles from './OperationEditor.module.css';

interface OperationEditorProps {
  value: string;
  onOperationChange: (value: string) => void;
}

const OperationEditor = ({ value, onOperationChange }: OperationEditorProps) => {
  return (
    <div className={styles.operationEditor}>
      <textarea
        className={styles.textarea}
        value={value}
        onChange={(e) => onOperationChange(e.target.value)}
      ></textarea>
    </div>
  );
};

export default OperationEditor;
