import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { StyledInfo, Wrapper } from 'components/molecules/StudentsListItem/StudentsListItem.styles';
import { Average } from 'components/atoms/Average/Average';

const StudentsListItem = ({ userData: { average, name, attendance }, ...props }) => {
  return (
    <Wrapper {...props}>
      <Average value={average}>{average}</Average>
      <StyledInfo>
        <p>{name}</p>
        <p>Attendance: {attendance}%</p>
      </StyledInfo>
      <DeleteButton />
    </Wrapper>
  );
};

StudentsListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string.isRequired,
  }),
};

export default StudentsListItem;
