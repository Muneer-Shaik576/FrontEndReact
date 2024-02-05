import {AppBar,Toolbar, Typography, styled} from '@mui/material'



 const Navbar= () => {
    const Header = styled(AppBar)`
       background:black;
    
    `

    return(
       <Header  position="static">
        <Toolbar >
          <Typography variant='h4'>WINIT</Typography><span>Thinking Mobile</span>
         
        </Toolbar>
       </Header>

       
    )
}

export default Navbar