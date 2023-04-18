import PropTypes from 'prop-types';
import {Title, FilterDiv, Label, Input } from './Filter.styled';
export const Filter = ({ handleFilter }) => {
  return (
    <>
            <Title>Contacts</Title>
            <FilterDiv>
      <Label htmlFor="">Find contacts by name</Label>
      <Input
        name="filter"
        onChange={handleFilter}
        type="text"
      /></FilterDiv>
    </>
  );
};


Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};
