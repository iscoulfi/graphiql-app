interface HeadersEditorProps {
  value: string;
  onHeadersChange: (value: string) => void;
}

export const HeadersEditor = ({ value, onHeadersChange }: HeadersEditorProps) => {
  return (
    <div>
      <textarea value={value} onChange={(e) => onHeadersChange(e.target.value)}></textarea>
    </div>
  );
};
