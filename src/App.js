import './App.css';
import Loading from './components/Loading';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FileEarmarkFill, Trash2Fill, PencilFill } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from "react-redux";
import { listTodo, setSelected, } from './actions/todo_action';
import LogoImage from './assets/majo-logo-white.png';


import ModalAdd from './components/ModalAdd';
import ModalEdit from './components/ModalEdit';
import ModalDetail from './components/ModalDetail';
import ModalDelete from './components/ModalDelete';
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const { data } = useSelector((state) => state.listTodo);
  const dispatch = useDispatch();




  const handleDetail = async (id) => {
    dispatch(setSelected(id));
    setShowDetail(true);
  };
  const handleEdit = async (id) => {
    dispatch(setSelected(id));
    setShowEdit(true);
  };
  const handleDelete = async (id) => {
    dispatch(setSelected(id));
    setShowDelete(true);
  };

  const loadImage = image => {
    return new Promise((resolve, reject) => {
      const loadImg = new Image()
      loadImg.src = image
      loadImg.onload = () =>
        setTimeout(() => {
          resolve(image.url)
        }, 2000)
      loadImg.onerror = err => reject(err)
    })
  }


  const handleLoading = async () => {
    await loadImage(LogoImage);
    await dispatch(listTodo());
    setTimeout(() => setIsLoading(true), 200);
  };
  useEffect(() => {
    handleLoading()
  }, []);

  let doneList = null;
  let todoList = null;
  if (data) {
    console.log('data', data)
    todoList = data.filter(({ status }) => status === 0).sort((a, b) => b.createdAt - a.createdAt).reverse().map(({ title, id }) => <ListItem key={id}>
      <div>{title}</div>
      <div style={{ display: 'flex' }}>
        <IconButton onClick={() => handleDetail(id)}>
          <FileEarmarkFill />
        </IconButton>
        <IconButton onClick={() => handleEdit(id)}>
          <PencilFill />
        </IconButton>
        <IconButton onClick={() => handleDelete(id)}>
          <Trash2Fill />
        </IconButton>
      </div>
    </ListItem>);
    doneList = data.filter(({ status }) => status === 1).sort((a, b) => b.createdAt - a.createdAt).map(({ title, id }) => <ListItem done key={id}>
      <div>{title}</div>
      <div style={{ display: 'flex' }}>
        <IconButton onClick={() => handleDetail(id)}>
          <FileEarmarkFill />
        </IconButton>
        <IconButton onClick={() => handleEdit(id)}>
          <PencilFill />
        </IconButton>

      </div>
    </ListItem>);
  }


  return (
    <div>
      <ModalAdd show={showAdd} setShow={setShowAdd} />
      <ModalDetail show={showDetail} setShow={setShowDetail} />
      <ModalEdit show={showEdit} setShow={setShowEdit} />
      <ModalDelete show={showDelete} setShow={setShowDelete} />
      <Loading isLoaded={isLoading} />
      <Main>
        <Title>TODO LIST APP</Title>
        <ContentContainer>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <SubTitle>TO DO</SubTitle>
            <Button onClick={() => setShowAdd(true)}>Add Todo</Button>

          </div>
          {todoList}
          <section style={{ marginTop: 60 }}>
            <div style={{ marginBottom: 20 }}>
              <SubTitle>DONE</SubTitle>
            </div>
            {doneList}
          </section>
        </ContentContainer>
      </Main>

    </div >
  );
}

const Main = styled.div`
  padding: 20px;
`;

const ContentContainer = styled.div` 
  margin: 40px auto ; 
  width: 100%;
  max-width: 800px;  
  padding: 20px; 
  background-color: #FAFAFB; 
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
  text-decoration:${({ done }) => done ? 'line-through' : 'none'};
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
