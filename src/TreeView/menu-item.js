import React, { useState } from "react";
import MenuList from "./menu-list";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { FaMinus, FaPlus,FaHospitalUser,FaEllipsisV,FaEdit,FaTrash, FaSave, FaCross } from "react-icons/fa";
import FormDialog from "./group-modal";

export default function TreeMenuItem({id, item ,handleChange}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const hasChildren = item.children && item.children.length > 0;
  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDelete = (element,id) => {
    console.log(element,id)
    if(hasChildren){
        alert("Please delete child groups.");
        setAnchorEl(null);
    }
    else{
        console.log(item)
        handleChange(element,'delete',id);
    }
    // console.log(event.currentTarget)
  };
  const handleCreate = (element,id) => {
    console.log(element,id)
    handleChange(element, 'add', id);
    if (item.children){
        item.children.push({'lable':''})
    }
    else{
        item.children =[{'label':''}]
    }
    // console.log(event.currentTarget)
  };
  const handleEdit = (element,id) => {
    // console.log(element);
    handleChange(element, 'edit',id);

    // if(!isedit){
    //     setEdit(true);
    //     handleChange(element, 'edit');

    //     // setAnchorEl(null);
    // }
    // console.log(event.currentTarget)
  };
  const handleSave = (event,anchorEl) => {
    console.log(event,anchorEl);
    // setitem(...item, item.label = event.target.value);
  }
  const handleTreeChange =(data, type,id)=>{
    console.log(data);
    console.log(item, handleChange);
    handleChange(data, type, id);
} 

  return (
    <li>
      <div className="menu-item">
        {hasChildren && (
          <span onClick={handleToggle} className="toggle-icon">
            {isExpanded ? <FaMinus /> : <FaPlus />}
          </span>
        )}
       
        <p><span><FaHospitalUser className="c-icons"/> </span>{item.label}{id} </p>

        <div>
        {/* {!isedit ?    //   :
    //   <span>
    //     <FaSave  onClick={(e)=> handleSave(e,anchorEl) }/>
    //     <FaCross onClick={(e)=> handleClose} />
    //   </span>
    //     }*/}
      <span
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       <FaEllipsisV className="c-icons"/>
      </span>
 
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={(e)=>handleEdit(item,id)}>  <FaEdit className="c-icons" />Edit Group</MenuItem>
        <MenuItem onClick={(e)=>handleCreate(item,id)}> <FaPlus className="c-icons" /> Create Child Group</MenuItem>
        <MenuItem onClick={(e)=>handleDelete(item,id)}> <FaTrash className="c-icons" />Remove Group</MenuItem>
      </Menu>
    </div>

      </div>
      {/* {isedit ?
    //      <TextField
    //      label="Group Name"
    //      defaultValue={item.label}
    //      variant="standard"
    //    />
       
        :<></>} */}
      {hasChildren && isExpanded && <MenuList id={id} list={item.children}  handleTree={handleTreeChange} />}
    </li>
  );
}