import { Input, Box } from "@chakra-ui/react";
import { useRef } from "react";

export const FileUpload = ({ acceptedFileTypes, onChange }) => {
  const inputRef = useRef(null);
  return (
    <Box>
      <input
        type='file'
        onChange={(e) => onChange(e.target.files[0])}
        accept={acceptedFileTypes}
        ref={inputRef}
        style={{ display: 'none' }} />

      <Input
        onClick={() => inputRef.current.click()}
        readOnly={true}
        width='135px'
        cursor='pointer'
        bg='brand.secondary'
        value='Upload image'
        textAlign='center'
        color='brand.white'
        fontWeight='600'
        borderRadius='4px'
        p='0'
        _focus={{ boxShadow: 'none' }}
      />
    </Box>
  );
}

export default FileUpload