import { Button, Select, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from "@mui/material"
import AddProduct from "./AddProduct"
import styled from "@emotion/styled"
import { useState } from "react"
import { getselitems, saveDetails } from "../Service/API"
import { Link, Navigate, useNavigate } from "react-router-dom"
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
const iniforuser={
    uid:"",
    templateName:"",
    templateDescription:"",
    itemCount:0

}
const iniforTempline={
    uid:"",
    loTemplateUID:"",
    skuCode:"",
    uomCode:"",
    mon:0,
    tue:0,
    wed:0,
    thu:0,
    fri:0,
    sat:0
}
const iniforUom={
    uid:"",
    skuCode:"",
     code:"",
    Name:""

}
let count=0
const AddProd=()=>{
    const navigate=useNavigate();
   
const[lt,setLT]=useState(iniforuser)
const[ltl,setLTL]=useState(iniforTempline)
const[skuuom,setskuuom]=useState(iniforUom)

const onValueChange=(e)=>{
    setLT({...lt,[e.target.name]:e.target.value})
   
}

const ChooseData=(data)=>{
  
    getTotaldata(data);
    
  }

  const [view,setView]=useState([])
const getTotaldata=async(data)=>{
// console.log(data);

let response=await getselitems(data);
setView(response.data)

}
const handleUom=(e)=>{
    setskuuom({...skuuom,[e.target.key]:e.target.value})

}
const handleitems=(e)=>{
    count=parseInt(count)+parseInt(e.target.value)
    setLT({...lt,itemCount:count})   
}

const handlSave=async()=>{
   console.log(lt)
   await saveDetails(lt)
   navigate('/')
}

    return(
        <>
         <div className="main">
        <div>
        <Typography variant="h6">Maintain Load Request Template</Typography>
        
        </div><br/><br/>
        <div>
        <TextField
          label="Template UID"
          placeholder="Enter uid"
          variant="filled"
          size="small"
          onChange={(e)=>onValueChange(e)}
          name="uid"
        />
        <TextField
          label="Template Name"
          placeholder="Enter Name"
          variant="filled"
          size="small"
          onChange={(e)=>onValueChange(e)}
          name="templateName"
        />
        <TextField
          label="Description"
          placeholder="EnterTemplate Descripton"
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
                            <TableCell><input type="checkbox" /></TableCell>
                            <TableCell><input value={user.code}></input></TableCell>
                            <TableCell><input value={user.name}></input></TableCell>
                            <TableCell><Select name="uom" onChange={(e)=>{handleUom(e)
                                                               setLTL({...ltl,[e.target.key]:e.target.value})}} >
                                    <option value={user.code}>OU</option>
                                    <option value={user.code}>EA</option>
                                    <opotion value={user.code}>CT</opotion>
                                </Select></TableCell>
                            <TableCell><input type="number" name="mon" onChange={(e)=>handleitems(e)} /></TableCell>
                            <TableCell><input type="nmber" name="tue"onChange={(e)=>handleitems(e)}/></TableCell>
                            <TableCell><input type="number" name="wed"onChange={(e)=>handleitems(e)}/></TableCell>
                            <TableCell><input type="number" name="thu"onChange={(e)=>handleitems(e)} /></TableCell>
                            <TableCell><input type="nmber"name="fri"onChange={(e)=>handleitems(e)}/></TableCell>
                            <TableCell><input type="number" name="sat"onChange={(e)=>handleitems(e)} /></TableCell>
                        </Tbody>
                    ))
                }
            </TableBody>
        </StyledTable>
          </div>
      <div>
        <Button component={Link} to={`/`} >Back</Button>
        <Button>Delete selected from List</Button>
        <Button variant="contained" onClick={handlSave}>Save</Button>
      </div>
      </div>
        </>
    )
}
export default AddProd