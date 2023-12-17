import Spinner from "../../atoms/Spinner/Spinner";

const LoadingPage = ({ label = "Loading..." }: { label?: string }) => {
  return (
    <div className="flex justify-center align-middle text-center h-full w-full place-items-center bg-red-50">
      <Spinner label={label} />
    </div>
  );
};

export default LoadingPage;
