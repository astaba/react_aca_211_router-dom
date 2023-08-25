import React from "react";
import { json, useRouteLoaderData, redirect } from "react-router-dom";

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

export const action = async ({ request, params }) => {
  const { eventID } = params;
  const url = "http://localhost:8080/events/" + eventID;
  const options = {
    method: request.method,
  };
  const goingRequest = new Request(url, options);

  const response = await fetch(goingRequest);
  if (!response.ok) {
    throw json(
      { message: "Could not delete event!" },
      { status: response.status, statusText: response.statusText }
    );
  }

  return redirect("/events");
};

const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");
  // console.log(data);

  return <EventItem event={data.event} />;
};

export default EventDetailPage;
