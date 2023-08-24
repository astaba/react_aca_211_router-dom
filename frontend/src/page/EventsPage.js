import React from "react";
import { useLoaderData, json } from "react-router-dom";

import EventsList from "../components/EventsList";

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // throw new Error(`Error ${response.status}: ${response.statusText}`);
    // throw {message: "Something went wrong"};
    // throw json({ message: "Could not fetch events!", status: 500 });
    throw json(
      { message: "Could not fetch events!" },
      { status: response.status || 500, statusText: response.statusText }
    );
  }
  return response;
};

const EventsPage = () => {
  const { events: fetchedEvents } = useLoaderData();

  return <EventsList events={fetchedEvents} />;
};

export default EventsPage;
