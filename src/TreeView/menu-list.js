import React from "react";
import TreeMenuItem from "./menu-item";

export default function MenuList({ list = [],handleTree,id }) {

    const handleTreeChange =(data, type,id)=>{
        handleTree(data, type,id);
    } 
  return (
    <ul className="menu-list-container">
      {list.length>0 && list.map((listItem, index) => (
        <TreeMenuItem id={id>=0?id+''+index:index} key={index} item={listItem} handleChange={handleTreeChange} />
      ))}
    </ul>
  );
}