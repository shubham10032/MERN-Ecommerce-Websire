import React from 'react';
import { AppBar, Toolbar, Box ,Typography } from '@mui/material';
import styled from '@emotion/styled';
// coponent import 

import Search from './search';

const StyledHeader = styled(AppBar)`
 background:  #2874f0;
 height : 59px;
 `;
 const Component = styled(Box)`
 margin-left: 12%;
 line-height: 1`;

 const SubHeading = styled(Typography)`
 font: 10px;
 font-style: Italic`;
 

const Header = () => {
  const logoUrl = 'https://www-cdn.bigcommerce.com/assets/bc-logo-dark.svg';
  return (
    <div>
      <StyledHeader>
        <Toolbar>
          <Component>
            <img src={logoUrl} alt='logo' style={{ }}/>
            <Box styled ={{display: 'flex' }}>
               <SubHeading> Explore&nbsp;  
                   <Box component="span" style={{color: '#FFE500'}}>PLus</Box>
                </SubHeading>
                
            </Box>
          </Component>
           <Search/>
        </Toolbar>
      </StyledHeader>
    </div>
  );
};

export default Header;