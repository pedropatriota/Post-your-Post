import { CSSProperties } from "react";
import ClipLoader from "react-spinners/RotateLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

const Loading = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "#000",
        opacity: "0.7",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ClipLoader
        color="#ccc"
        loading={true}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
      />
    </div>
  );
};

export default Loading;
