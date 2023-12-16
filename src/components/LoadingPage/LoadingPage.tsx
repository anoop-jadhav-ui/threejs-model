import Spinner from "../Spinner/Spinner";

const LoadingPage = () => {
  return (
    <div className="flex justify-center align-middle text-center h-full w-full place-items-center bg-red-50">
      <Spinner />
    </div>
  );
};

export default LoadingPage;
