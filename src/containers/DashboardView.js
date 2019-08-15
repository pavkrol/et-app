import React from 'react';
import styled from 'styled-components';

const DashboardView = ({user, finances}) => {
  console.log(user);
  console.log(finances);
  const userProfile = {...user, ...finances};
  console.log(userProfile);
  return (
    <div>We're almost there!</div>
  )
};

export default DashboardView;