import React, { Component } from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import history from "historyHelper";

axios.interceptors.response.use(
  config => config,
  err => {
    history.replace("profile");
    Promise.reject(err);
  }
);

axios.get("https://jsonplaceholde r.typicode.com/posts").then(res => {
  console.log(res);
});
export default function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/profile" component={Profile} />
    </Switch>
  );
}

const Login = () => {
  return <div className="login">login page</div>;
};

const Profile = () => {
  return <div className="login">profile page</div>;
};
