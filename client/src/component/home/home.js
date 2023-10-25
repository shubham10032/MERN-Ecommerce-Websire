
// components of home

import NavBar from './navbar';
import Banner from './banner'
import { Box } from '@mui/material';
import { styled } from '@mui/material';

const Component = styled(Box)`
padding: 20px 10px;
background: #F2F2F2
`


const Home = () => {
  return(
    <>    

    <NavBar/>
    <Component>
        <Banner/>
    </Component>
  

    </>

  )
}


export default Home;