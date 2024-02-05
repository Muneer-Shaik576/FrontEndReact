
import { Button, Pagination, Table, TableBody, TableCell,  TableHead, TableRow, Typography, styled } from "@mui/material"
import { useEffect, useState } from "react"
import { deleteUser, getUsers } from "../Service/API"



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
const Page=styled(Pagination)`
margin:20px 0 ;

`
const Tbody=styled(TableRow)`
& >td{
    font-size:20px;
}

`


const Home=()=>{
  //to delete specifc data
  const deleteUserData=async(id)=>{
    
    await deleteUser(id)

    getUserdetails();
}

    const[users,setUser]=useState([])
    useEffect(()=>{
      getUserdetails();
    },[])
    const getUserdetails=async() =>{
        let response= await getUsers();
        setUser(response.data);
        
      }
      
    //   console.log(users);
    return(
        <div className="main">
        <div>
        <Typography variant="h6">Maintain Load Request Template</Typography>
        
        </div> <br/><br/>
        <div>
            <label>Name</label>
            <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.." title="Type in a name"/>
            <Button variant="contained">Search</Button>
            <Button variant="outlined">Reset</Button>
        </div><br/><br/>
        <Button variant="contained" onClick={()=> window.open("/AddUSer", "_blank")}>Add New</Button>
        <br/>
        <StyledTable>
            <TableHead>
                <Thead>
                    <TableCell>SN No</TableCell>
                    <TableCell>Template Name</TableCell>
                    <TableCell>Template Descripton</TableCell>
                    <TableCell>No Of Items</TableCell>
                    <TableCell>Action</TableCell>
                </Thead>
            </TableHead>
            <TableBody>
            {
                    users.map((user,i)=>(
                        <Tbody key={i}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.templateName}</TableCell>
                            <TableCell>{user.templateDescription}</TableCell>
                            <TableCell>{user.itemCount}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="secondary" style={{marginRight:10}} onClick={()=>window.open(`/EditPage/${user.uid}`,"_blank")}>Edit</Button>
                                <Button variant="contained" onClick={()=>{deleteUserData(user.id)}} > Delete </Button>
                            </TableCell>
                        </Tbody>
                    
                    ))
                }
            </TableBody>
          <Page count={2} shape="rounded" />
        </StyledTable>
        </div>
    )
}
export default Home