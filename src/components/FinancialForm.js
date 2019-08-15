import React, { useState, useReducer } from 'react';
import styled, {css} from 'styled-components';
import Description from '../components/Description';
import Input from '../components/Input';
import Label from '../components/Label';
import Button from '../components/Button';
import {initialData} from '../data/initialData';
import { navigate } from "@reach/router";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  max-height: 60vh;
  overflow-y: scroll;
  a {
    align-self: flex-end;
    margin-right: 30px;
    line-height: 42px;
  }
`;

const Field = styled.div`
  display: flex;
  padding-right: 30px;
  margin-bottom: 20px;
  align-items: center;
  flex-basis: 40%;
  ${props => props.small && css`
    justify-content: space-between;
  `}
`;

const Month = styled.h3`
  font-family: ${({ theme }) => theme.font.main};
  font-size: 13px;
  font-weight: 700;
  margin: 15px 0 10px 0;
`;

const FieldsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;



const updateFinances = (state, action) => {
  if(action.type === "update") {
    return state.map(element => {
      if(element.id === action.id) {
        return {...element, [action.key]: action.value};
      }
      else 
        return element;
    })
  } else 
  return state;
};

const FinancialForm = ({finFn}) => {

  const currentDate = new Date();
  const monthsNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monthsCount = currentDate.getMonth();
  const monthsArray = monthsNames.slice(0, monthsCount);

  const [finances, dispatch] = useReducer(updateFinances, initialData);

  return (
    <Form noValidate onSubmit={(e) => {
      console.log(finances);
      e.preventDefault();
      finFn(finances);
      navigate("../dashboard");
    }}>
      <Description>W kolejnym kroku uzupełnij dane finansowe Twojej firmy za bieżący rok. Wszystkie poniższe kwoty podaj w PLN.</Description>
      <Field>
        <Label inline>1. Strata z roku ubiegłego (jeśli występuje):</Label>
        <Input type="text" name="lastYearLoss" onChange={(e) => console.log(e.target.value)}/>
      </Field>
      {
        monthsArray.map((element) => (
        <React.Fragment key={element}>
          <Month>{element}</Month>
          <FieldsWrapper>
            <Field small>   
              <Label inline>Przychód (brutto):</Label>
              <Input type="text" name="income_gross" data-month={element} onChange={(e) => dispatch({type: 'update', id: e.target.dataset.month, key: e.target.name, value: e.target.value})}/>
            </Field>
            <Field small>
              <Label inline>Przychód (netto):</Label>
              <Input type="text" name="income" data-month={element} onChange={(e) => dispatch({type: 'update', id: e.target.dataset.month, key: e.target.name, value: e.target.value})}/>
            </Field>
            <Field small>
              <Label inline>Koszty (brutto):</Label>
              <Input type="text" name="costs_gross" data-month={element} onChange={(e) => dispatch({type: 'update', id: e.target.dataset.month, key: e.target.name, value: e.target.value})}/>
            </Field>
            <Field small>
              <Label inline>Koszty (netto):</Label>
              <Input type="text" name="costs" data-month={element} onChange={(e) => dispatch({type: 'update', id: e.target.dataset.month, key: e.target.name, value: e.target.value})}/>
            </Field>
          </FieldsWrapper> 
        </React.Fragment>
        ))
      }
      <Field>
        <Label inline>2. Suma wpłaconych zaliczek na podatek dochodowy:</Label>
        <Input type="text" name="incomeTax"/>
      </Field>
      <Field>
        <Label inline>3. Suma wpłat na podatek VAT:</Label>
        <Input type="text" name="vatTax"/>
      </Field>
      <Field>
        <Label inline>4. Suma wpłat na ubezpieczenie społeczne:</Label>
        <Input type="text" name="socialInsurance"/>
      </Field>
      <Button type="submit" as="button" colorstyle="full_green">Dalej</Button>
    </Form>
  )
};

export default FinancialForm;