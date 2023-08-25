import React from "react";
import { json, useRouteLoaderData } from "react-router-dom";

import EventItem from "../components/EventItem";

export const loader = async ({ request, params }) => {
  const { eventID } = params;
  const response = await fetch(`http://localhost:8080/events/${eventID}`);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch event details!" },
      { status: response.status, statusText: response.statusText }
    );
  }
  return response;
};

const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");
 // console.log(data);

  return <EventItem event={data.event} />;
};

export default EventDetailPage;
