import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Browse from "./components/Browse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

export default function App() {
  return (
    <RouterProvider router={router}>
      <Body />
    </RouterProvider>
  );
}
