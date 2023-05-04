import React, { ChangeEvent } from 'react';
import styles from './VariablesEditor.module.css';

interface VariablesEditorProps {
  value: string;
  onVariablesChange: (value: string) => void;
}

const VariablesEditor = ({ value, onVariablesChange }: VariablesEditorProps) => {
  return (
    <div className={styles.variablesEditor}>
      <textarea
        className={styles.textarea}
        value={value}
        onChange={(e) => onVariablesChange(e.target.value)}
      ></textarea>
    </div>
  );
};

export default VariablesEditor;
