import React from "react";
import { EditorState } from "draft-js";
import RichTextEditor from "../../components/form/rich-text-editor";

type JobDescriptionFormProps = {
  data: EditorState
  onChange: (editorState: EditorState) => void
}

const JobDescriptionFrom = ({ data, onChange }: JobDescriptionFormProps) => {
  return (
    <RichTextEditor data={data} onEditorStateChange={onChange} />
  );
}

export default JobDescriptionFrom;