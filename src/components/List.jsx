import React from "react";
import { useSelector } from "react-redux";
import ListsItem from "./ListsItem";

const List = () => {
  const { items } = useSelector((state) => state.items);
  return (
    <div className="listContainer">
      {items?.map((item, index) => (
        <ListsItem key={index} id={index} item={item} />
      ))}
    </div>
  );
};

export default List;
