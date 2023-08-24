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
import EventDetailPage, {
  loader as eventDetailLoader,
} from "./page/EventDetailPage";
import EditEventPage from "./page/EditEventPage";
import NewEventPage from "./page/NewEventPage";
import EventsLayout from "./ui/EventsLayout";
import ErrorDisplay from "./components/ErrorDisplay";
import NotFound from "./page/NotFound";

const routesDefinition = createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<HomePage />} />
    <Route path="events" element={<EventsLayout />}>
      <Route
        index
        element={<EventsPage />}
        loader={eventsLoader}
        errorElement={<ErrorDisplay />}
      />
      <Route
        path=":eventID"
        id="event-detail"
        loader={eventDetailLoader}
        errorElement={<ErrorDisplay />}
      >
        <Route index element={<EventDetailPage />} />
        <Route path="edit" element={<EditEventPage />} />
      </Route>
      <Route path="new" element={<NewEventPage />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Route>
);

const router = createBrowserRouter(routesDefinition);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
