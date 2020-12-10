import logo from './logo.svg';
import './App.css';
import Loading from './components/Loading';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

function App() {
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    setTimeout(() => setIsLoading(true), 2000)
  }, []);


  return (
    <div>
      <Loading isLoaded={isLoading} />
      <Main>
        <ContentContainer>content</ContentContainer>
      </Main>

    </div>
  );
}

const Main = styled.div`
  height: 100vh; 
  background: rgb(41,188,179);
  background: linear-gradient(0deg, rgba(41,188,179,1) 0%, rgba(146,206,137,1) 100%);
  padding: 20px;
`;

const ContentContainer = styled.div` 
  margin: 40px auto ; 
  width: 100%;
  max-width: 800px; 
  min-height: 300px;
  min-height: 300px;
  padding: 20px; 
  background-color: white;
  display: flex; 
  padding: 40px; 
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 45px 0px rgba(0,0,0,0.23);
  -moz-box-shadow: 0px 0px 45px 0px rgba(0,0,0,0.23);
  box-shadow: 0px 0px 45px 0px rgba(0,0,0,0.23);
`;

export default App;
