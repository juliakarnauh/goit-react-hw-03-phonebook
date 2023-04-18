import styled from 'styled-components';
export const Title = styled.h1`
text-align: center;
margin-top: 15px;
font-weight: 600;
font-size: 45px;
line-height: 48px;
`
export const Form = styled.form`
  margin: 40px auto;
  width: 700px;
  border: 2px solid grey;
  display: flex;
  flex-direction: column;
  padding: 15px 30px;
  justify-content: center;
  border-radius: 10px;
  :hover,
  :focus {
    border: 2px solid rgb(31, 143, 135);
    box-shadow: 0 0 0 2px rgb(31, 143, 135);
  }
`;
export const Input = styled.input`
  width: 325px;
  height: 40px;
  outline: none;
  border: 2px solid grey;
  border-radius: 4px;
  padding-left: 10px;
  margin-top: 5px;
  :hover,
  :focus {
    border: 2px solid rgb(31, 143, 135);
    box-shadow: 0 0 0 2px rgb(31, 143, 135);
  }
`;
export const Label = styled.label`
  margin-top: 15px;
  font-weight: 600;
  font-size: 30px;
  line-height: 48px;
`;
export const Button = styled.button`
  margin-top: 20px;
  border-radius: 10px;
  width: 312px;
  height: 40px;
  background-color: inherit;
  border: 2px solid grey;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  :focus,
  :hover {
    background-color: rgb(31, 143, 135);
    color: white;
    border: none;
  }
  margin-bottom: 20px;
`;