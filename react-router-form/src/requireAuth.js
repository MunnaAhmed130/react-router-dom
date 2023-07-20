import { redirect } from "react-router-dom";

export async function requireAuth(request) {
  const path = new URL(request.url).pathname;
  // console.log(request.url);
  //   console.log(path);
  const isLoggedIn = JSON.parse(localStorage.getItem("loggedin"));

  if (!isLoggedIn) {
    throw redirect(`/login?redirectTo=${path}`);
  }
}
