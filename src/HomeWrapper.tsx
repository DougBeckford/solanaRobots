import { AppBar, Toolbar, Typography, Box, Button } from '@material-ui/core'
import Discord from './discord-icon-svgrepo-com.svg'
import Twitter from './icons8-twitter.svg'
import bgImg from './145430.jpeg'


import React from 'react'



function HomeWrapper(props:any) {
    const handleDrawerToggle = async () =>{
        
    }
  return (
    <div style={{backgroundImage:`url('${bgImg}')`, height:"100vh",backgroundRepeat:"no-repeat"}}>
        <AppBar component="nav" style={{backgroundColor:"rgba(255, 0, 0, 0)"}}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            style={{ flexGrow: 1, display: 'block', fontSize:"30px",fontWeight:"bold"  }}
          >
            Solana Robots
          </Typography>
          <Box sx={{ display:'block'  }}>

            <Button 

                  style={{ color: '#fff',fontWeight:"bold",fontSize:"20px" }}
                >
                <a href="https://twitter.com/" target="_blank" style={{textDecoration:"none",color:"white"}}>

                    <img src={Twitter} alt="discord-svg" height={48} width={48}/>
                </a>
              </Button>
              <Button 

                  style={{ color: '#fff',fontWeight:"bold",fontSize:"20px" }}
                >
                <a href="https://discord.com/" target="_blank" style={{textDecoration:"none",color:"white"}}>

                    <img src={Discord} alt="discord-svg" height={48} width={48}/>
                </a>
              </Button>
            
          </Box>
        </Toolbar>
        {props.children}
      </AppBar>

        {/* <h1 style={{color:"white"}}>g</h1> */}
    </div>
  )
}

export default HomeWrapper
