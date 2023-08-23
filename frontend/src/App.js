import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import RootLayout from "./ui/RootLayout";
import HomePage from "./page/HomePage";
import EventsPage, { loader as eventsLoader } from "./page/EventsPage";
import EventDetailPage from "./page/EventDetailPage";
import EditEventPage from "./page/EditEventPage";
import NewEventPage from "./page/NewEventPage";
import EventsLayout from "./ui/EventsLayout";

const routesDefinition = createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<HomePage />} />
    <Route path="events" element={<EventsLayout />}>
      <Route
        index
        element={<EventsPage />}
        loader={eventsLoader}
      />
      <Route path=":eventID" element={<EventDetailPage />} />
      <Route path=":eventID/edit" element={<EditEventPage />} />
      <Route path="new" element={<NewEventPage />} />
    </Route>
  </Route>
);

const router = createBrowserRouter(routesDefinition);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
