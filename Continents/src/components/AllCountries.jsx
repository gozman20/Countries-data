import React, { useEffect, useState } from 'react'
import styles from './styles';
import { useDispatch,useSelector } from 'react-redux'
import { updateRegion } from '../features/countrySlice';
import { options } from '../selectOptions';
import Select from 'react-select'

export default function AllCountries() {
    const dispatch=useDispatch()
    const [region,setState]=useState([])
    const [data,setData]=useState()
   const {mode}=useSelector((store)=>store)

    const handleChange =(selectedOption)=>(setState(selectedOption.value))
    

     async function name(){
        const api= await fetch(`https://restcountries.com/v3.1/region/${region}`)
        const response =await api.json()
        console.log(response)
        localStorage.setItem("region", JSON.stringify(response))
        dispatch(updateRegion(response))
        setData(response)
     }


 console.log(data)
 console.log(region)
     

useEffect(()=>{
  if(region.length===0) return
    name()
},[region])




  return (
    
   <section className={`${styles.paddingX}  `} >
    <div className={`${styles.boxWidth}`}>
    <div className=' flex flex-row justify-end  '>
      <Select  options={options}  onChange={handleChange} className={`shadow-xl focus:outline-none max-w-[201px]`}/>
      </div>
   </div>
    </section>
     
      
  )
}
 