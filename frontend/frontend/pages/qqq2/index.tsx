import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCarBrandArgs,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation carBrand($name: String!) {
    carBrand(name: $name) {
      id
      name
    }
  }
`;

export default function ImageUploadPage(): JSX.Element {
  const [test, settest] = useState("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "carBrand">,
    IMutationCarBrandArgs
  >(UPLOAD_FILE);

  const onChaneFile = async (event: ChangeEvent<HTMLInputElement>) => {
    settest(event.currentTarget.value);
  };
  const buttonT = async () => {
    const result = await uploadFile({
      variables: {
        name: test,
      },
    });
    console.log(result);
  };

  return (
    <>
      <input type="text" onChange={onChaneFile} />
      <button onClick={buttonT}>등록</button>
    </>
  );
}
