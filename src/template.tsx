import App from "./App";
import { Loading } from "./components";
import useAppHelper from "./use-app-helper";

const Template = () => {
  const { globalIsLoading } = useAppHelper();
  return <>{globalIsLoading ? <Loading /> : <App />}</>;
};

export default Template;
