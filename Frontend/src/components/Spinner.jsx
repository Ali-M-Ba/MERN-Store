import ClipLoader from "react-spinners/ClipLoader";

const Spinner = ({ loading }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ClipLoader color="#36d7b7" loading={loading} size={150} />
    </div>
  );
};

export default Spinner;
