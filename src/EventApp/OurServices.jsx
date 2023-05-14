import React from 'react'
import ServicesNav from './ServicesNav';
import ServicesCard from './ServicesCard';
import ServicesApi from '../Components/ServicesApi';
import { useState } from 'react';
const uniquelist = [...new Set(ServicesApi.map((currele)=>{ //we have created the unique list here
    return currele.name;
})), "All"]
console.log(uniquelist);
const OurServices = () => {
    const [ServiceData, setServiceData] = useState(ServicesApi);
     const [list, setlist] = useState(uniquelist);  //we have passed unique list inside the list
const filterItems = (category)=>{
    if(category === "All"){
        setServiceData(ServicesApi);
        return;
        
    }
    const updatedList = ServicesApi.filter((currele)=>{
        return currele.name === category;
    })
    setServiceData(updatedList);
}
  return (
    <>
        <ServicesNav filterItems = {filterItems} list = {list} />
        <ServicesCard ServiceData = {ServiceData} />
 
    </>
  )
}

export default OurServices;