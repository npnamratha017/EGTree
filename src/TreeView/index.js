
import React, { useState } from "react";
import MenuList from "./menu-list";
import menus from "../constant.js";
import "./index.css";
import FormDialog from "./group-modal.js";

export default function TreeView() {
    const [treelist, setTreeList] = useState(menus);
    const [isedit, setEdit] = useState(false);
    const [editData, setEditData] = useState('');
    const [type, setType]= useState('')
    const [key, setKey]= useState(null)
    
    const changetreeList =(data, type,key)=> {
        setKey(key);
        console.log(data, type,key);
        if(type == 'edit'||'add'){
            setEdit(true);
            setEditData(data)
            setType(type)
        }
        if(type =='delete'){
            var treeListData = treelist;
            let i=0;
            let data = treelist.children[key[0]].children;
            let index=''
            while(i<key.length-1){
                index+='['+key[i]+'].children'
                i++;
            }
            console.log(index, typeof(index))
            console.log(eval(treeListData.children.index))
           for(let i=1;i<key.length-1 ;i++){
            console.log(i, key[i]);
            let data = data.children[key[i]].children;
            treeListData.children[key[i]].children = [...data.filter((obj)=> obj.label != data.label )]
            // treeListData.push([...data.filter((obj)=> obj.label != data.label )]);
            console.log(treelist);
        console.log(treeListData.children)

           }
           console.log(treelist);
        //    setTreeList(treeListData);
        }
    }

    function getObjects(obj, key, val, newVal) {
        var newValue = newVal;
        var objects = [];
        for (var i in obj) {
            if (!obj.hasOwnProperty(i)) continue;
            if (typeof obj[i] == 'object') {
                objects = objects.concat(getObjects(obj[i], key, val, newValue));
            } else if (i == key && obj[key] == val) {
                obj[key] = 'qwe';
            }
        }
        return obj;
    }
    // const findNested=(data,i)=>{
    //     return data.children[key[i]].children;
    // }
    // const  findNested = (obj, key, value, replacedValue, type)=> {
    //     console.log(obj, key, value, replacedValue)
    //     // Base case
    //     if (obj[key] == value && type !='delete') {
    //         console.log(obj[key], obj, key, replacedValue)
    //         let newobj={}
    //         newobj[key]=replacedValue
    //       return newobj;
    //     }
    //     else if(obj[key] == value && type =='delete'){
    //         return obj
    //     } else {
    //       for (var i = 0, len = Object.keys(obj).length; i < len; i++) {
    //         console.log(obj[i])
    //         if (typeof obj[i] == 'object') {
    //           var found = obj[i].children ? obj[i].children.findIndex(findNested(obj[i].children, key, value,replacedValue, type)):findNested(obj[i], key, value,replacedValue, type) ;
    //           console.log(found, "found")
    //           console.log( obj[i].children,  obj[i])
    //           if(type =='delete' && found){
    //             console.log(found)
    //             let newObj =  obj[i].children ? obj[i].children.filter((obj) => obj.label != value ) : obj[i].filter((obj) => obj.label != value )
    //             return newObj
    //           }
    //           else if(type =='add' && found){
    //             let newObj = obj[i].children ? obj[i].children.push(found): obj[i].push(found)
    //           }
    //            else if ( type =='edit' && found) {
    //             if(obj[i].children){
    //                 if(type =='delete'){
    //                     obj[i].children.filter()
    //                 }
    //                 let objIndex = obj[i].children.findIndex(obj => obj.label == found.label);
    //                 obj[i].children[objIndex].label = replacedValue;
    //             }
    //             else{
    //                     let objIndex =  obj[i].findIndex(obj => obj.label == found.label);
    //                     obj[i][objIndex].label =replacedValue;
    //                 }
    //                 // if(obj[i].children){
    //             //     let newobj= obj[i].children.map(obj => { 
    //             //         if ( obj.label == found.label) {
    //             //             return { ...obj, label: found.label };
    //             //         }
    //             //         return obj;
    //             //     });
    //             //     console.log(newobj)
    //             //     // let objIndex = obj[i].children.findIndex(obj => obj.label == found.label);
    //             //     // obj[i].children[objIndex].label = found.label;
    //             // }
    //             // else{
    //             //     let objIndex =  obj[i].findIndex(obj => obj.label == found.label);
    //             //     obj[i][objIndex].label = found.label;
    //             // }
    //             console.log(found)
    //             console.log(obj)
    //         //     // If the object was found in the recursive call, bubble it up.
    //             return found;
    //           }
    //         }
    //       }
    //     }
    //   }
    const handleEdit =(name,data)=>{
        console.log(name,data);
        if(type == 'add'){
            
        }
        if(type =='edit'){
            const found =getObjects(treelist, 'label', data, name)
        }
        setEdit(false)
    }
   

    return (
        <div className="tree-view-container">
        <MenuList list={treelist.children} handleTree={changetreeList} />
        <FormDialog open={isedit} handleCloseDialog={handleEdit} item={type == 'edit'?editData.label :''}/>
        </div>
    );
}