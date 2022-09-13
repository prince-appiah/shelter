import { createContext, useEffect, useState } from "react";

export const NetworkStatusContext = createContext({
  // hasNetwork: false,
  // setHasNetwork: Function
});

const NetworkStatusProvider = ({ children, ...rest }) => {
  const [hasNetwork, setHasNetwork] = useState(window?.navigator?.onLine);
  console.log("🚀 ~ hasNetwork", hasNetwork);

  const handleNetworkChange = () => setHasNetwork(!hasNetwork);

  useEffect(() => {
    window.addEventListener("offline", () => setHasNetwork(false));
    window.addEventListener("online", () => setHasNetwork(true));

    return () => {
      window.addEventListener("offline", () => setHasNetwork(false));
      window.addEventListener("online", () => setHasNetwork(true));
    };
  }, []);

  return (
    <NetworkStatusContext.Provider
      value={{ hasNetwork, setHasNetwork: handleNetworkChange }}
      {...rest}
    >
      {children}
    </NetworkStatusContext.Provider>
  );
};

export default NetworkStatusProvider;
