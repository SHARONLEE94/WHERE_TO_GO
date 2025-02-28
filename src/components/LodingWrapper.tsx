import Error from "./Error";
import Loding from "./Loding";

interface LoadingWrapperState {
  isLoading: boolean;
  error: boolean;
  children: React.ReactNode;
}

const LoadingWrapper = ({
  isLoading,
  error,
  children,
}: LoadingWrapperState) => {
  if (isLoading) return <Loding />;
  if (error) return <Error />;
  return <>{children}</>;
};

export default LoadingWrapper;
