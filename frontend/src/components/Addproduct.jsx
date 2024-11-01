import  { useEffect } from 'react'
//import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Addproduct= () => {
  const [form,setForm]=useState({
   productName:"",
   productPrice:"",
   productDescription:"",
   productCategory:"",
    
  })

  const location=useLocation();


function fieldValue(event){
  setForm({...form,[event.target.name]:event.target.value})
}



function valueAdd(){

  if (location.state!=null) {
    axios.put('http://localhost:5999/editproduct/'+location.state.val._id,form).then(()=>{
      alert('data updated')
    }).catch((error)=>{
      console.log(error)
    })

  }
  
  
  else {

    axios.post('http://localhost:5999/addproduct',form).then(()=>{
      alert('Data Added')
      }).catch((error)=>{
        console.log(error)
      })
    
  }

}

useEffect(()=>{

if (location.state!=null) {

  setForm({...form,productName:location.state.val.productName,
   productPrice:location.state.val.productPrice,
    productDescription:location.state.val.productDescription,
    productCategory:location.state.val.productCategory})

} else {
  
  setForm({...form, productName:"",
   productPrice:"",
    productDescription:"",
    productCategory:""})

}

},[])

  return (
    
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
      <TextField 
      required
      id="a"
     label="Product Name" 
     name='productName' 
    
     onChange={fieldValue} 
     value={form.productName} /></div><br />

    <div><TextField
    required
     id="bc" 
     label="Product Description" 
     name='productDescription' 
   
      onChange={fieldValue}
      value={form.productDescription}/></div><br />

    <div><TextField
    required
     id="bc"
      label="Product Price"
       name='productPrice' 
     
       onChange={fieldValue}
       value={form.productPrice}/></div><br />
    
    <div><TextField 
    required
    id="x"
     label="Product Category"
      name='productCategory' 
    
      onChange={fieldValue}
      value={form.productCategory}/></div><br />

    <div><Button 
    variant='contained' 
    onClick={valueAdd}>Add</Button></div>

  </Box>
    
  )
}

export default Addproduct