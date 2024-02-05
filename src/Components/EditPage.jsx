import styled from "@emotion/styled"
import {  Button, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from "@mui/material"
import AddProduct from "./AddProduct"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getUsers } from "../Service/API"

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
    id:"",
    uid:"",
    templateName:"",
    templateDescription:"",
    itemCount:""
 }

const EditPage=()=>{
  


const[user,setUser]=useState(intialValues)
const {id}=useParams();

// useEffect(()=>{
//        getUserData();
// },[])

// const getUserData= async()=>{
//     let response=await getUsers(id);
//     console.log(response);
//     // setUser(response.data)
// }
    return(
        <div className="main">
        <div>
        <Typography variant="h6">Maintain Load Request Template</Typography>
        
        </div><br/><br/>
        <div>
        <TextField
          label="Template Name"
          defaultValue="EnterName"
          variant="filled"
          size="small"
          
        />
        <TextField
          label="Description"
          defaultValue="EnterTemplate Descripton"
          variant="filled"
          size="small"
        />
      </div><br/><br/>

      <Typography>Model Quantity for load Tmeplate Items</Typography>
      <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search by SKU Code" title="Type in a name"/>
      <Button>search</Button>
      <AddProduct/>
      <div><br/><br/>
      <StyledTable>
            <TableHead>
                <Thead>
                    <TableCell><input type="checkbox" /></TableCell>
                    <TableCell>SKUCoe</TableCell>
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
                <Tbody>
                    
                </Tbody>
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
export default EditPage