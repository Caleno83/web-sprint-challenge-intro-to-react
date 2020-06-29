import React, { useState } from "react";
import styled from 'styled-components';
//I use this part for ButtonDropdown from https://reactstrap.github.io/components/button-dropdown/
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
//I use this fontAwesome icons following the process from https://github.com/FortAwesome/react-fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons"


const Background = styled.div`
background-color: yellow;
margin-top: 15px;
`

const Button = styled.button`
border: 2px solid black;
color: green;
font-weight: bold;
font-size: 20px;
width: 1250px;
text-align: left;
padding:  20px 15px 5px 15px;
border-radius: 6px;
&:hover {
    color: #008B8B;
}
`
const CardColor = styled.div`
background-color: #20B2AA;
width: 1285px;
height: 370px;
` 
const Img = styled.img`
border: 2px solid black;
border-radius: 5px;
height: 287px;
margin-right: 20px;
&:hover {
    opacity: 80%;
 }
 `

 const Paragraph = styled.p`
 color: black;
 margin-top: 15px;
 &:hover {
     color: #00008B;
 }
 `

 const ImgDiv = styled.div`
 display: flex;
 justify-content: flex-end;
 margin-top: -330px;
 `
 const ButtonArrow = styled.p`
 color: green;
 font-size: 25px;
 float: right;
 &:hover {
    color: #008B8B;
 }
 `

const CharacterCard = props => {
    console.log('props from CharacterCard', props);

//I use this part for ButtonDropdown from https://reactstrap.github.io/components/button-dropdown/

    const [dropDownOpen, setOpen] = useState(false);

    const toggle = ()=> setOpen(!dropDownOpen);
        
        return (
    
        <Background>
            <ButtonDropdown isOpen={dropDownOpen} toggle={toggle}>
                <DropdownToggle color="success">
                    <Button>{props.name} <ButtonArrow><FontAwesomeIcon icon={faChevronCircleRight} /></ButtonArrow></Button>
                </DropdownToggle>
                    <DropdownMenu>
                        <CardColor>
                            <DropdownItem>
                                <Paragraph>Name: {props.name} </Paragraph>
                            </DropdownItem>
                            <DropdownItem>
                                <Paragraph>Gender: {props.gender}</Paragraph>
                            </DropdownItem>
                            <DropdownItem>
                                <Paragraph>Status: {props.status}</Paragraph>
                            </DropdownItem>
                            <DropdownItem>
                                <Paragraph>Species: {props.species}</Paragraph>
                            </DropdownItem>
                            <DropdownItem>
                                <Paragraph>Origin: {props.origin}</Paragraph>
                            </DropdownItem>
                            <DropdownItem>
                                <Paragraph>Location: {props.location}</Paragraph>
                            </DropdownItem>
                            <ImgDiv>
                                <Img
                                    src={props.image} 
                                    alt='character picture' />
                            </ImgDiv> 
                        </CardColor>
                    </DropdownMenu> 
            </ButtonDropdown>   
        </Background>
    
    );
};

export default CharacterCard;