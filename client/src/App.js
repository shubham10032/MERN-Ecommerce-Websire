

// component 

import Header from './component/header/header'
import Home from './component/home/home'
import { Box } from '@mui/material';


function App() {
  return (
    <div>
      <Header/>
      <Box style = {{ marginTop: 54}}>
      <Home/>
      </Box>

    </div>
  );
}

export default App;
