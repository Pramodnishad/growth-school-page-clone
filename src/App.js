import React from 'react'
import frame from './assets/images/frame.png'
import Frame from './components/Frame'
import Answer from './components/Answer'
import Register from './components/Register'
import Mentor from './components/Mentor'


function App() {
  return (
    <div className="md:w-full w-auto">
    <div className="md:w-auto w-auto "
       style={{
         backgroundImage: `url(${frame})`,
         backgroundRepeat: 'no-repeat',
         backgroundSize: 'cover',
         backgroundAttachment: 'fixed',
       }}
     >
       <Frame />
     </div> 
     <Answer />
  
     <Register />
    
     <Mentor />
  

     </div>  
  )
}

export default App