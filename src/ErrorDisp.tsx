import { VFC } from "react";

interface Props {
  errorMsg: string;
}

export const ErrorDisp: VFC<Props> = ({ errorMsg }) => {
  return <p>{errorMsg}</p>;
};
