import { Skeleton } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  isLoading: boolean;
  children: ReactNode;
};

const LoadingSkeleton = ({ isLoading, children }: Props) => {
  return (
    <Skeleton isLoaded={!isLoading} bg="white">
      {children}
    </Skeleton>
  );
};

export default LoadingSkeleton;
