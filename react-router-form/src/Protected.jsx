import { Outlet } from "react-router-dom";
import { requireAuth } from "./requireAuth";

export async function loader({ request }) {
  //   const url = new URL(request.url);
  //   console.log(url.pathname);
  await requireAuth(request);
  return null;
}

const Protected = () => {
  return (
    <>
      <h1>super secret info here</h1>
      <Outlet />
    </>
  );
};

export default Protected;
