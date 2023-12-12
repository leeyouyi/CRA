import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
// "proxy": "https://10.88.53.72/dpmswebapi"

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  proxy: {
    host: "localhost",
    port: 3000,
  },
});
interface login {
  UserName: string;
  Paccword: string;
  CakeTake?: boolean;
  RememberMe: boolean;
}
const baseUrl = "/Take";
const login = (params: login): Promise<unknown[]> =>
  instance.post(`${baseUrl}/login`, params).then((response) => response.data);

// const baseUrl = "/zh-tw";
// const fetchAttractions = (): Promise<unknown[]> =>
//   axios.get(`${baseUrl}/Attractions/All`).then((response) => response.data);

const App = (): JSX.Element => {
  console.log(process.env);
  const mutation = useMutation({
    mutationFn: login,
  });

  return (
    <div className="App">
      <button
        onClick={() => {
          mutation.mutate({
            UserName: "6735",
            Paccword: "6735",
            RememberMe: false,
            CakeTake: true,
          });
        }}
      >
        login
      </button>
    </div>
  );
};

export default App;
