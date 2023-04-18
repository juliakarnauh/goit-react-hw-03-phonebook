import styled from 'styled-components'
export const Title = styled.h2`
text-align: center;
margin-bottom: 10px;
font-weight: 600;
font-size: 35px;
line-height: 48px;`
export const FilterDiv = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
width: 500px;
margin-left: auto;
margin-right: auto;
align-items: center;
`
export const Label = styled.label`
text-align: center;
`
export const Input = styled.input`
width: 200px;
height: 20px;
outline: none;
border-radius: 4px;
border: 2px solid grey;
margin-bottom: 30px;
:hover,
  :focus {
    border: 2px solid rgb(31, 143, 135);
    box-shadow: 0 0 0 2px rgb(31, 143, 135);
  }`