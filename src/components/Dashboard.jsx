import React from "react";
import AddItem from "./AddItem";
import List from "./List";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>TODO</h2>
      <AddItem />
      <List />
    </div>
  );
};

export default Dashboard;
