import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Opps! Somethig went wrong!</h1>
      <h3>
        {error.status} - {error.statusText}
      </h3>
      <h3>{error.data}</h3>
    </div>
  );
};

export default Error;
