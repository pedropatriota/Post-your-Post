import * as Style from "./Style";

export type TSpacer = {
  value: string;
};
const Spacer = ({ value }: TSpacer) => {
  return <Style.SpacerContainer value={value} />;
};

export default Spacer;
