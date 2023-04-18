import styled from "styled-components";
export const ContactUl = styled.ul`
display: flex;
flex-direction: column;
gap: 15px;
margin-bottom: 30px;
align-items: center;
`
export const ContactLi =  styled.li`
display: flex;
gap: 20px;
font-weight: 400;
font-size: 25px;
line-height: 30px;
`
export const ContactButton = styled.button`
width: 80px;
background-color: inherit;
border: 2px solid grey;
font-weight: 400;
font-size: 15px;
line-height: 25px;
border-radius: 4px;
:focus,
:hover {
  background-color: rgb(31, 143, 135);
  color: white;
  border:  2px solid white;
}
`