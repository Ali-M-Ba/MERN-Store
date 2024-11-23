import ClipLoader from "react-spinners/ClipLoader";

const Spinner = ({ loading }) => {
  return (
    <div className="spinner-container">
      <ClipLoader color="#36d7b7" loading={loading} size={150} />
    </div>
  );
};

export default Spinner;
