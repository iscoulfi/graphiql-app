import React, { useEffect, useRef } from 'react';
import CodeMirror, { EditorFromTextArea } from 'codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror-graphql/mode';
import 'codemirror-graphql/hint';
import 'codemirror-graphql/info';
import 'codemirror-graphql/jump';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

interface CodeMirrorWrapperProps {
  value: string;
  mode: string;
  onChange: (value: string) => void;
}

const CodeMirrorWrapper: React.FC<CodeMirrorWrapperProps> = ({ value, onChange, mode }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const editorRef = useRef<EditorFromTextArea | null>(null);

  useEffect(() => {
    if (textareaRef.current) {
      const editor = CodeMirror.fromTextArea(textareaRef.current, {
        mode: mode,
        theme: 'material',
        lineNumbers: true,
      });
      editor.on(
        'beforeChange',
        (instance: CodeMirror.Editor, changeObj: CodeMirror.EditorChangeCancellable) => {
          onChange(changeObj.text.join('\n'));
        }
      );

      editorRef.current = editor;
    }
    return () => {
      if (editorRef.current) {
        editorRef.current.toTextArea();
        editorRef.current = null;
      }
    };
  }, [onChange]);

  return (
    <div>
      <textarea ref={textareaRef} defaultValue={value}></textarea>
    </div>
  );
};

export default CodeMirrorWrapper;
