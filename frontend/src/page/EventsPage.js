import React from "react";
import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

export const loader = async () => {
  const response = await fetch("http://localhost:8080/eents");
  if (!response.ok) {
    // throw new Error(`Error ${response.status}: ${response.statusText}`);
    // throw {message: "Something went wrong"};
    throw new Response(
      JSON.stringify({ message: response.statusText || "Could not fetch events!" }),
      { status: response.status || 500 },
    );
  }
  return response;
};

const EventsPage = () => {
  const { events: fetchedEvents } = useLoaderData();

  return <EventsList events={fetchedEvents} />;
};

export default EventsPage;
