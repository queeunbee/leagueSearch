import './App.css';
import styled from 'styled-components';

import Background from './components/Background';
import TextSection from './components/TextSection';
import Box from './components/Box';
import Sphere from './components/AnimatedSphere';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import React, { Suspense } from 'react';

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;

  canvas {
    height: 500px;
  }
`;

function App() {
  return (
    <Wrapper className='App'>
      <Background />
      <TextSection />
      <Canvas className='canvas'>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Box />
        </Suspense>
      </Canvas>
      <Canvas className='canvas'>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Sphere />
        </Suspense>
      </Canvas>
    </Wrapper>
  );
}

export default App;

/* useState takes two parameters: the variable itself, the function to set that variable
the only way to change the value of searchText is to call the function setsearchText!

onChange is pretty much going to call a function, 
so we can take the event from the onChange input box
and set the value 

*some strange things happen in javascript and understanding if an object is actually empty
on way to get around this is to use JSON.stringify which takes the object, turns it into a string
and then makes sure it deosn't look like this empty object string

suspense prevents breaking - fallback 
in case the content can't be retrieved!

 */
