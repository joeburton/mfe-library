import React from 'react';

export const PersonalDetails = ({ name, dob }) => {
  return (
    <div>
      {name}, {dob}
    </div>
  );
};

export default PersonalDetails;
