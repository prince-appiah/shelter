import { Alert, AlertIcon, Text } from "@chakra-ui/react";
import { useState } from "react";

export const useApiError = () => {
  const [error, setError] = useState("");

  const handleApiError = (error) => {
    if (error.status === 401) {
      setError(error.data.msg);
      return;
    }
  };

  const Notify = () => {
    return (
      <Alert status="error">
        <AlertIcon />
        {<Text>{error}</Text>}
      </Alert>
    );
  };

  return { handleApiError, Notify, error };
};
