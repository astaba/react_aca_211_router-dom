// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// DONE
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// DONE
// 4. Add properly working links to the MainNavigation
// DONE
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// DONE
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// DONE
// 7. Output the ID of the selected event on the EventDetailPage
// DONE
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import RootLayout from "./ui/RootLayout";
import HomePage from "./page/HomePage";
import EventsPage from "./page/EventsPage";
import EventDetailPage from "./page/EventDetailPage";
import EditEventPage from "./page/EditEventPage";
import NewEventPage from "./page/NewEventPage";
import EventsLayout from "./ui/EventsLayout";

const routesDefinition = createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<HomePage />} />
    <Route path="events" element={<EventsLayout />}>
      <Route index element={<EventsPage />} />
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
