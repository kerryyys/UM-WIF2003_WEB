import React, { useRef, useEffect } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const MarkdownEditor = ({ content, setContent }) => {
  const editorInstance = useRef(null);

  useEffect(() => {
    if (editorInstance.current && editorInstance.current.value() !== content) {
      editorInstance.current.value(content);
    }
  }, [content]);

  return (
    <SimpleMDE
      value={content}
      options={{
        spellChecker: false,
        placeholder: "Write your post here...",
      }}
    />
  );
};

export default MarkdownEditor;
