import React, { useState } from "react";
import { border, chakra } from '@chakra-ui/react'
import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import { useRouter } from "next/dist/client/router";
import { EditorProps } from "react-draft-wysiwyg"
// import { convertFromRaw, convertToRaw } from "draft-js";

// const Editor = dynamic(
//   () => import("react-draft-wysiwyg").then((module) => module.Editor),
//   {
//     ssr: false,
//   }
// );

const Editor = dynamic<EditorProps>(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
)

const JobDescription = () => {
  const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());
  const router = useRouter();
  // const { id } = router.query;

  // useEffect(() => {

  //     setEditorState(
  //       EditorState.createWithContent(
  //         convertFromRaw(snapshot?.data()?.editorState)
  //       )
  //     );
  // }, []);

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);

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
      onEditorStateChange={onEditorStateChange}
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

export default JobDescription;