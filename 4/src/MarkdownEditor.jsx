import React, { useRef, useEffect } from 'react';
import Editor from '@toast-ui/editor';

const MarkdownEditor = ({ onContentChange }) => {
  // BEGIN (write your solution here)
  const mdElement = useRef(null);

  useEffect(() =>
  {
    const editor = new Editor({
      el: mdElement.current,
      hideModeSwitch: true,
    });
  
    editor.addHook("change", () => {
      const content = editor.getMarkdown();
      onContentChange(content)
    });
  })

  return <div ref={mdElement}></div>
  // END
};

export default MarkdownEditor;
