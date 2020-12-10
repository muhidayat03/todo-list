import logo from './logo.svg';
import './App.css';
import Loading from './components/Loading';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ArrowRight, FileEarmarkFill, Trash2Fill, PencilFill } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


import ModalAdd from './components/ModalAdd';
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [showAdd, setShowAdd] = useState(false);


  useEffect(() => {
    setTimeout(() => setIsLoading(true), 2000)
  }, []);


  return (
    <div>
      <ModalAdd show={showAdd} setShow={setShowAdd} />
      <Loading isLoaded={isLoading} />
      <Main>
        <Title>TODO LIST APP</Title>
        <ContentContainer>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <SubTitle>TO DO</SubTitle>
            <Button onClick={() => setShowAdd(true)}>Add Todo</Button>

          </div>
          <ListItem>
            <div>add</div>
            <div style={{ display: 'flex' }}>
              <IconButton>
                <FileEarmarkFill />
              </IconButton>
              <IconButton>
                <PencilFill />
              </IconButton>
              <IconButton>
                <Trash2Fill />
              </IconButton>
            </div>
          </ListItem>
          <section style={{ marginTop: 60 }}>
            <div style={{ marginBottom: 20 }}>
              <SubTitle>DONE</SubTitle>
            </div>
            <ListItem>
              <div>testing</div>
              <div style={{ display: 'flex' }}>
                <IconButton>
                  <FileEarmarkFill />
                </IconButton>
                <IconButton>
                  <PencilFill />
                </IconButton>
                <IconButton>
                  <Trash2Fill />
                </IconButton>
              </div>
            </ListItem>
          </section>
        </ContentContainer>
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
  background-color: #FAFAFB;
  /* display: flex;  */
  padding: 40px; 
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 45px 0px rgba(0,0,0,0.23);
  -moz-box-shadow: 0px 0px 45px 0px rgba(0,0,0,0.23);
  box-shadow: 0px 0px 45px 0px rgba(0,0,0,0.23);
`;

const ListItem = styled.div` 
  font-family: 'Poppins', sans-serif; 
  background-color: white; 
  color: #7A7E82; 
  padding: 20px;
  border-radius: 40px;
  margin-bottom: 12px;
  -webkit-box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.1);
  -moz-box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.1);
  box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconButton = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 30px; 
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  border: 1px solid rgba(146,206,137,1);
  svg{
      color: rgba(146,206,137,1);
  }
  :hover{
    background-color: rgba(146,206,137,1);
    svg{
      color: white;
    }
    
  }
`;


const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color: white; 
  font-family: 'Poppins', sans-serif; 
`;
const SubTitle = styled.h1`
  font-size: 28px;
  font-weight: 600;
  color: rgba(146,206,137,1);
  font-family: 'Poppins', sans-serif; 
`;






export default App;
