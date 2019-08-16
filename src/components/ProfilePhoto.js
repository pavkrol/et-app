import React from 'react';
import styled from 'styled-components';

const Photo = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #E3E3E3;
  background-image: url('../../assets/img/user.svg');
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;
`;

const CompanyName = styled.h2`
  font-family: ${({ theme }) => theme.font.logo};
  font-size: 15px;
  font-weight: 600;
  color: black;
  margin-left: 20px;
`;

const ProfilePhoto = ({companyName}) => {
  return(
    <>
      <Photo/>
      <CompanyName>{companyName}</CompanyName>
    </>
  )
};

export default ProfilePhoto;