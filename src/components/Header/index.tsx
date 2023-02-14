import * as Style from "./styles";

interface IHeader {
  children: React.ReactNode;
}

const Header = ({ children }: IHeader) => {
  return <Style.Container>{children}</Style.Container>;
};

export default Header;
