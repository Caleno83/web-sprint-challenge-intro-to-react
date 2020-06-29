import React from 'react';
import './App.css';
import Character from "./components/Character.js"
import styled from "styled-components";

const Container = styled.div`
padding: 40px;
margin-top: 40px;
`
const Title = styled.h1`
text-align: center;
color: #443e3e;
text-shadow: 2px 2px green;
padding: 10px 0 20px 0;
&:hover {
  color: yellow;
}
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div>
      <>
      <h1 className="Header">Rick And Morty</h1>
      <Container>
        <Title>Main Characters</Title>
        <Character />
      </Container>
      </>
      </div>
  );
}

export default App;
