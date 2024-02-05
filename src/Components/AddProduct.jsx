import styled from "@emotion/styled"
import { Box, Button, Modal, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { getItems } from "../Service/API"

  
const StyledTable=styled(Table)`
width:90%;
margin:50px auto 0 auto;

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

  

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



  

const AddProduct=({ChooseData})=>{



    const[user,setUser]=useState([])
    const[isChecked,setChecked]=useState([])
    useEffect(()=>{
        getUserData();
    },[])

    const getUserData=async()=>{
        let response= await getItems();
          console.log(response);
          setUser(response.data)
    }


    const[open,setModal]=useState(false)

  const handleOpen=()=>{
      setModal(true)
  }
  const handleClose=()=>{
      setModal(false)
  }
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
const ViewData=()=>{
    ChooseData(isChecked)
    handleClose();
}
  
    return(
    <>
        <Button variant="contained" style={{margin:"auto 60px "}} onClick={handleOpen}>Select data</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography>Add Product</Typography><br/>
    <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Searc by SKUCode" title="Type in a name"/>
            <Button variant="contained">Search</Button><br/>
    <StyledTable>
        <TableHead>
            <Thead>
                <TableCell><input type="checkbox" /></TableCell>
                <TableCell>Sku Code</TableCell>
                <TableCell>SJU Name</TableCell>
            </Thead>
        </TableHead>
        <TableBody>
        {
                        user.map((users,i)=>(
                            <Tbody key={i}>
                                <TableCell><input type="checkbox" value={users.id} checked={users.isChecked} onChange={(e)=>handlcheckbox(e)}/></TableCell>
                                <TableCell>{users.code}</TableCell>
                                <TableCell>{users.name}</TableCell>
                                
                            </Tbody>
                        ))
                    }
        </TableBody>
    </StyledTable>
    <Button variant="contained" onClick={ViewData}>Add Selected Products</Button>
  </Box>

</Modal>
</>
    )
}
export default AddProduct