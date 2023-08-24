import React from "react";
import { useRouteError } from "react-router-dom";
import PageContent from "./PageContent";

const ErrorDisplay = () => {
  const error = useRouteError();

  let title = "An error occurred!";
  let message = "Something went wrong";

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }
  // if(error.status === 404) {
  //   title = "Not found!"
  //   message = "Could not found resource or page"
  // }

  return (
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
  );
};

export default ErrorDisplay;
