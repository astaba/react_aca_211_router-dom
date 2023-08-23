import React from "react";
import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }
  const resData = await response.json();
  return resData;
};

const EventsPage = () => {
  const { events: fetchedEvents } = useLoaderData();

  return <EventsList events={fetchedEvents} />;
};

export default EventsPage;
