import Loader from "components/Loader";
import React, { Suspense } from "react";

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) => {
  return (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
};

export default Loadable;
