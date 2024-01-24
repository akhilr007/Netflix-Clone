import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Browse from "./components/Browse";
import { Provider } from "react-redux";
import appStore from "./store/appStore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

export default function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={router}>
        <Body />
      </RouterProvider>
    </Provider>
  );
}
