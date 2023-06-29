import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";
import { Modal } from "antd";

const UPLOADFILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      id
      url
    }
  }
`;

export default function ImageUploadPage(): JSX.Element {
  const [imageURL, setImageURL] = useState("");
  const [uPLOADFILE] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOADFILE);
  const onChaneFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    if (file === undefined) return;
    // console.log(file);
    console.log(file);
    try {
      const result = await uPLOADFILE({
        variables: {
          file,
        },
      });
      console.log("ID입니다.", result.data?.uploadFile?.id);
      console.log("url입니다.", result.data?.uploadFile.url);
      setImageURL(result.data?.uploadFile.url ?? "");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <>
      <input type="file" onChange={onChaneFile} />
      <img src={`https://storage.googleapis.com/${imageURL}`} />
    </>
  );
}
