import "./index.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

import React, { useState, useEffect } from "react";

export const Index = () => {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError]=useState('')
  const jwtToken = Cookies.get("jwtToken");
  const navigate = useNavigate();
  const checkbox = document.getElementById("checkmark");
  const token = "your-jwt-token";
  let userid;

  const onSubmitSuccess = () => {
    if (checkbox.checked) {
      Cookies.set("jwtToken", token, { expires: 7 });
    } else {
      Cookies.remove("jwtToken");
    }
    Cookies.set("id",userid,{expires:7})
    navigate("/home");
  };

  const login = async (event) => {
    event.preventDefault();
    const userDetails = { username, password };
    
    const url = "http://localhost:3001/login";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    
    const data=await response.json()
    if (response.status === 200) {
      userid=data.id
      onSubmitSuccess();
    }else{
      setError(data.text)
    }
  };
  useEffect(() => {
    if (jwtToken) {
      navigate("/home");
    }
  }, [jwtToken, navigate]);

  return (
    <>
      <div className="flex items-center h-screen">
        <div className="flex flex-1 flex-col justify-start px-6 py-6  w-3/4">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Welcome to HCL
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              className="space-y-6"
              action="#"
              method="POST"
              onSubmit={login}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={username}
                    id="email"
                    name="email"
                    type="text"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="p-1 flex justify-item-center text-left">
                <input
                  className="w-5 mr-1 px-3 h-5 rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:leading-6"
                  id="checkmark"
                  type="checkbox"
                ></input>
                <label htmlFor="checkmark">Keep me login</label>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
                {error.length>0?<p className="text-red-600">*{error}</p>:null}
              </div>
            </form>
          </div>
        </div>
        <div className="w-1/4">
          <img src="" alt="logo" />
        </div>
      </div>
    </>
  );
};
