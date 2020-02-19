import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
const register = () => {
  const [input, setInput] = useState({ username: "", email: "", password: "" });
  const router = useRouter();
  const handleChange = event => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  const handleSubmit = () => {
    console.log("click");
    axios({
      method: "post",
      url: "http://localhost:1337/auth/local/register",
      data: {
        username: input.username,
        email: input.email,
        password: input.password
      }
    })
      .then(response => {
        // Handle success.
        console.log("Well done!");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
        localStorage.setItem("jwt", response.data.jwt);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        router.push("/");
      })
      .catch((error, message) => {
        // Handle error.
        console.log("An error occurred:", error);
        console.log(error.response.data.message[0].messages[0]);
      });
  };

  return (
    <>
      <div>This is my Register</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          height: "80px",
          background: "aquamarine",
          alignItems: "center"
        }}
      >
        <label>
          Nickname:
          <input
            type="text"
            name="username"
            value={input.username}
            onChange={e => handleChange(e)}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={input.email}
            onChange={e => handleChange(e)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={e => handleChange(e)}
          />
        </label>
        <button
          onClick={() => handleSubmit()}
          disabled={
            input.username.length < 2 ||
            input.email.length < 2 ||
            input.password.length < 5
          }
        >
          Register
        </button>
      </div>
    </>
  );
};
export default register;
