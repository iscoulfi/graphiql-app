import React, { useState } from 'react';

const EditorTemplate = () => {
  const [operation, setOperation] = useState('');
  const [variables, setVariables] = useState('');
  const [headers, setHeaders] = useState('');

  const handleSubmit = () => {
    console.log('Operation:', operation);
    console.log('Variables:', variables);
    console.log('Headers:', headers);
  };

  return (
    <div style={{ display: 'flex', gap: '20%', marginTop: '50px' }}>
      <div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
          <textarea value={operation} onChange={(e) => setOperation(e.target.value)}></textarea>
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <div style={{ marginTop: '20%', display: 'flex', gap: '15px' }}>
          <div>
            <textarea value={variables} onChange={(e) => setVariables(e.target.value)}></textarea>
          </div>
          <div>
            <textarea value={headers} onChange={(e) => setHeaders(e.target.value)}></textarea>
          </div>
        </div>
      </div>
      <div style={{ border: '2px black solid', width: '40%' }}>Response</div>
    </div>
  );
};

export default EditorTemplate;
