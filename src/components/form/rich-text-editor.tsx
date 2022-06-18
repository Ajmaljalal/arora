import React, { useEffect, useState } from 'react'
import { convertToRaw, EditorState } from "draft-js";
// import { useRouter } from "next/dist/client/router";
import dynamic from 'next/dynamic';
import { EditorProps } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Editor = dynamic<EditorProps>(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
)

type RichTextEditorProps = {
  data: EditorState
  onEditorStateChange: (editorState: EditorState) => void
}

const RichTextEditor = ({ data, onEditorStateChange }: RichTextEditorProps) => {
  const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty())

  // const { id } = router.query;

  useEffect(() => {
    setEditorState(data)
  }, [])

  const onEditorChange = (editorState: EditorState) => {
    setEditorState(editorState);
    onEditorStateChange(editorState)

    // db.collection("userDocs")
    //   .doc(session.user.email)
    //   .collection("docs")
    //   .doc(id)
    //   .set(
    //     {
    //       editorState: convertToRaw(editorState.getCurrentContent()),
    //     },
    //     {
    //       merge: true,
    //     }
    //   );
  };
  return (
    <Editor
      editorState={editorState}
      onEditorStateChange={onEditorChange}
      toolbarClassName="toolbar-class"
      wrapperClassName="wrapper-class"
      editorClassName="editor-class"
      placeholder="Job Description here..."
      wrapperStyle={{ border: '1px solid', borderColor: '#ECF0FC', borderRadius: '4px', height: '360px', maxHeight: '360px', overflow: 'hidden' }}
      toolbarStyle={{ color: 'brand.grey400', border: 'none', borderBottom: '1px solid', borderColor: '#ECF0FC' }}
      editorStyle={{ border: 'none', overflow: 'hidden', padding: ' 0 16px' }}
      toolbar={{
        options: ['inline', 'fontSize', 'list', 'textAlign', 'blockType'],
        blockType: {
          inDropdown: true,
          options: ['Normal', 'H1', 'H2', 'H3']
        },
        inline: {
          inDropdown: false,
          options: ['bold', 'italic', 'underline'],
        },
      }}
    />
  );
}

export default RichTextEditor