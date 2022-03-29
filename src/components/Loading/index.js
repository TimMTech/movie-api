import ClipLoader from "react-spinners/ClipLoader";

const Loading = ({ loading }) => {
  return <ClipLoader loading={loading} color="red" />;
};

export default Loading;
