import React from 'react';
import styled from 'styled-components';
import Description from '../components/Description';
import Input from '../components/Input';
import Label from '../components/Label';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  a {
    align-self: flex-end;
    margin-right: 30px;
  }

`;

const Field = styled.div`
  display: flex;
  padding-right: 30px;
  margin-bottom: 20px;
  align-items: center;
`;

const FinancialForm = ({userData}) => {
  return (
    <Form>
      <Description>W kolejnym kroku uzupełnij dane finansowe Twojej firmy za bieżący rok.</Description>
      <Field>
        <Label inline>1. Strata z roku ubiegłego (jeśli występuje):</Label>
        <Input type="text" name="lastYearLoss"/>
      </Field>
    </Form>
  )
};

export default FinancialForm;