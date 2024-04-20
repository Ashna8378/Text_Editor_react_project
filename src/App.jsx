import React, { useState } from 'react';
import './styles.css';

function SimpleTextEditor() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="text-editor-container">
      <div className="text-editor">
        <h2>Simple Text Editor</h2>
        <textarea value={text} onChange={handleChange} rows="6" />
        <button className="count-btn">Characters count: {text.length}</button>

        {/* <p>Characters count: {text.length}</p> */}
      </div>
    </div>
  );
}

export default SimpleTextEditor;
