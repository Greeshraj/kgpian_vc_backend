import { Box, Heading, Container } from '@chakra-ui/react';
import Notifications from './components/Notifications';
import Options from './components/Options';
import VideoPlayer from './components/VideoPlayer';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import Header from './components/Header';
import Meet from './components/Meet';
function App() {
    return (
        <>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/newmeet' element={<Meet/>}/>
        </Routes>
        {/* <Home/> */}
        
        </>
    );
}
export default App;
