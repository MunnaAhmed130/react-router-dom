import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  useLoaderData,
  useParams,
  useSearchParams,
} from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import { requireAuth } from "./util";
// import AuthRequired from "./components/AuthRequired";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={<h1>Home page</h1>}
        loader={async () => {
          return null;
        }}
      />
      {/* <Route element={<AuthRequired />}> */}
      <Route
        path="protected"
        element={<h1>Super secret info here</h1>}
        // loader={async () => {
        //   const isLoggedIn = false;
        //   if (!isLoggedIn) {
        //     // navigate will not work outside components
        //     // return <Navigate to="/login" />;
        //     throw redirect("/login");
        //   }
        //   return null;
        // }}
        loader={async () => await requireAuth()}
      />

      {/* </Route> */}

      <Route path="login" element={<Login />} loader={loginLoader} />

      {/* understanding parallel Loader */}
      {/* <Route
        path="protected"
        element={<h1>Super secret info here</h1>}
        loader={async () => {
          const rand = Math.random() * 5;
          setTimeout(() => {
            console.log("Protected route", rand);
          }, rand);
          return null;
        }}
      >
        <Route
          path="nested"
          element={<h1>Nested protected route</h1>}
          loader={async () => {
            const rand = Math.random() * 5;
            setTimeout(() => {
              console.log("Nested Protected route", rand);
            }, rand);
            return null;
          }}
        />
      </Route> */}
    </Route>
  )
);

function loginLoader({ request }) {
  const url = new URL(request.url).searchParams.get("message");
  // console.log(url);
  return url;
}

function Login() {
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("message"));
  const message = useLoaderData();
  // console.log(message);
  return (
    <>
      <h1>login page goes here</h1>
      {message && <h1>{message}</h1>}
    </>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
