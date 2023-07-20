import { Form, redirect, useActionData, useNavigation } from "react-router-dom";

const sleep = (ms) => {
  return new Promise((resolve) => {
    console.log(resolve);
    setTimeout(resolve, ms);
  });
};

const fakeLoginUser = async (creds) => {
  await sleep(1000);
  if (creds.email === "b@b.com" && creds.password === "p123") {
    localStorage.setItem("loggedin", true);
    return {
      email: creds.email,
      token: "1234567890abcdef",
    };
  }
  throw new Error("couldn't log the user in");
};

// get form data through action
export const action = async (obj) => {
  const request = obj.request;
  const redirectTo = new URL(request.url).searchParams.get("redirectTo") || "/";
  console.log(redirectTo);
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    const data = await fakeLoginUser({ email, password });
    // console.log(data);
    return redirect(redirectTo);
  } catch (err) {
    // console.log(err);
    return err.message;
  }
  //   return null;
  //   console.log(email, password);
  //   console.log("couldn't log in");
  //   throw new Error("There was an error");
};

const Login = () => {
  const error = useActionData();
  const navigation = useNavigation();
  const status = navigation.state;
  // const formData = navigation.formData;
  // console.log(formData);
  //   const [formData, setFormData] = useState({ email: "", password: "" });
  //   const navigate = useNavigate();

  //   function handleChange(e) {
  //     const { name, value } = e.target;

  //     setFormData((prevFormData) => {
  //       return {
  //         ...prevFormData,
  //         [name]: value,
  //       };
  //     });
  //   }

  //   function handleSubmit(e) {
  //     e.preventDefault();
  //     console.log(formData);
  //     // loginUser(formData)
  //     navigate("/protected");
  //   }

  return (
    <Form
      method="post"
      //   replace
      // onSubmit={handleSubmit}
    >
      <h2 className="font-bold text-2xl mb-3">Login</h2>

      <input
        type="email"
        name="email"
        placeholder="Email address"
        // value={formData.email}
        // onChange={handleChange}
      />
      {/* <br /> */}
      <input
        type="password"
        name="password"
        placeholder="Password"
        // value={formData.password}
        // onChange={handleChange}
      />
      <br />
      {error && <h4>{error}</h4>}
      <button
        disabled={status === "submitting"}
        className="disabled:bg-slate-200"
      >
        {status === "idle" ? "Log in" : "Logging in..."}
      </button>
    </Form>
  );
};

export default Login;
