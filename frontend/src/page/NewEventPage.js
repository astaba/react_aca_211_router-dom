import React from "react";
import { json, redirect } from "react-router-dom";

import EventForm from "../components/EventForm";

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const eventData = {
    title: formData.get("title"),
    image: formData.get("image"),
    date: formData.get("date"),
    description: formData.get("description"),
  };

  const url = "http://localhost:8080/events";
  const headers = new Headers({ "Content-Type": "application/json" });
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(eventData),
  };
  const goingRequest = new Request(url, options);

  const response = await fetch(goingRequest);

  if (!response.ok) {
    throw json(
      { message: "Could not save event!" },
      { status: response.status, statusText: response.statusText }
    );
  }

  return redirect("/events")
};

const NewEventPage = () => {
  return <EventForm />;
};

export default NewEventPage;
