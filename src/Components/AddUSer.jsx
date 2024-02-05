import styled from "@emotion/styled"
import {  Button, FormControl, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from "@mui/material"
import AddProduct from "./AddProduct"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { getselitems, getuom } from "../Service/API"


const StyledTable=styled(Table)`
width:90%;
// margin:50px auto 0 auto;

`
const Thead=styled(TableRow)`
background:#000;
& > th {
    color:#fff;
    font-size:20px;
}
`

const Tbody=styled(TableRow)`
& >td{
    font-size:20px;
}

`

const intialValues={
    uid:"",
    templateName:"",
    templateDescription:"",
    itemCount:""
 }


const AddUSer=()=>{
    const[uom,setUom]=useState([])
    
    const onchangeoum=(e)=>{
        setUom({...user,[e.target.name]:e.target.value})

    }
//     const[uom,setUom]=useState([])
//     useEffect(()=>{
//         getUOMdetails();
    
// })
// const getUOMdetails=async()=>{
//  let response=await getuom();
//  setUom(response.data)
// }
  
    const ChooseData=(data)=>{
  
        getTotaldata(data);
        
      }

      const [view,setView]=useState([])
const getTotaldata=async(data)=>{
    // console.log(data);
    
    let response=await getselitems(data);
    setView(response.data)
  
}
const[isChecked,setChecked]=useState([])
const handlcheckbox=(e)=>{
       
    const value=e.target.value;
   const checked=e.target.checked;
 

    if(checked)
    {
        setChecked([...isChecked,value]);
        
       
    }else{
        setChecked(isChecked.filter((e)=>e!==value))
    }
  
}

const[user,setUser]=useState(intialValues)
    
const onValueChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})

}
const[qty,setQty]=useState(0);
const handleChange=(e)=>{
 setQty(qty+parseInt(e.target.value))
console.log(qty)
}
    return(
        <div className="main">
        <div>
        <Typography variant="h6">Maintain Load Request Template</Typography>
        
        </div><br/><br/>
        <div>
        <TextField
          label="UID "
          defaultValue="EnterUID"
          variant="filled"
          size="small"
          onChange={(e)=>onValueChange(e)}
          name="uid"
          
        />
        <TextField
          label="Template Name"
          defaultValue="EnterName"
          variant="filled"
          size="small"
          onChange={(e)=>onValueChange(e)}
          name="templateName"
        />
        <TextField
          label="Description"
          defaultValue="EnterTemplate Descripton"
          variant="filled"
          size="small"
          onChange={(e)=>onValueChange(e)}
          name="templateDescription"
        />
      </div><br/><br/>

      <Typography>Model Quantity for load Tmeplate Items</Typography>
      <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search by SKU Code" title="Type in a name"/>
      <Button>search</Button>
      <AddProduct ChooseData={ChooseData}/>
      <div><br/><br/>
      <StyledTable>
            <TableHead>
                <Thead>
                    <TableCell><input type="checkbox" /></TableCell>
                    <TableCell>SKUCode</TableCell>
                    <TableCell>SKU Name</TableCell>
                    <TableCell>UOM</TableCell>
                    <TableCell>MonQty</TableCell>
                    <TableCell>TueQty</TableCell>
                    <TableCell>WedQty</TableCell>
                    <TableCell>ThuQty</TableCell>
                    <TableCell>FriQty</TableCell>
                    <TableCell>SatQty</TableCell>
                </Thead>
            </TableHead>
            <TableBody>
            {
                    view.map((user,i)=>(
                        <Tbody key={i}>
                            <TableCell><input type="checkbox" value={view.id} checked={view.isChecked} onChange={(e)=>handlcheckbox(e)}/></TableCell>
                            <TableCell>{user.code}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>
                            <FormControl fullWidth>
                            <select name="Uom">
                                <option value={user.code}>OU</option>
                                <option value={user.code}>EA</option>
                                <option value={user.code}>CT</option>
                            </select>
                                </FormControl>
                            </TableCell>
                            <TableCell><input type="number" onChange={(e)=>handleChange(e)} /></TableCell>
                            <TableCell><input type="number" onChange={(e)=>handleChange(e)} /></TableCell>
                            <TableCell><input type="number" onChange={(e)=>handleChange(e)} /></TableCell>
                            <TableCell><input type="number" onChange={(e)=>handleChange(e)} /></TableCell>
                            <TableCell><input type="number" onChange={(e)=>handleChange(e)} /></TableCell>
                            <TableCell><input type="number" onChange={(e)=>handleChange(e)} /></TableCell>
                        
                            
                        </Tbody>
                    
                    ))
                }
            </TableBody>
            
         
        </StyledTable>
      </div>
      <div>
        <Button component={Link} to={`/`} >Back</Button>
        <Button>Delete selected from List</Button>
        <Button variant="contained">Save</Button>
      </div>

        </div>
    )
}
export default AddUSer