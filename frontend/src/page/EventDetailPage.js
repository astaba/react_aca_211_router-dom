import React from "react";
import { useParams } from "react-router-dom";

const EventDetailPage = () => {
  const { eventID: id } = useParams();

  return (
    <React.Fragment>
      <h1>EventDetailPage</h1>
      <p>{id}</p>
    </React.Fragment>
  );
};

export default EventDetailPage;
