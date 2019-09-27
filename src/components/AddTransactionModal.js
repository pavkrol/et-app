import React, {useState, useReducer} from 'react';
import styled from 'styled-components';
import Label from '../components/Label';
import Input from '../components/Input';
import Button from '../components/Button';
import Select from '../components/Select';
import { useSpring, animated } from 'react-spring';
import { useStateValue } from '../data/StateProvider';
import { random_id } from '../helpers/other_helpers';

const ModalWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.4);
  top: 0;
  left: 0;
`;

const Modal = styled(animated.div)`
  position: relative;
  top: calc(50% - 200px);
  left: calc(50% - 300px);
  width: 600px;
  height: 400px;
  background-color: white;
  padding: 20px;
  overflow: auto;
`;

const CloseModal = styled.button`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: ${({theme}) => theme.colors.grey};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  top: 10px;
  right: 10px;
  border-radius: 3px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-family: ${({theme}) => theme.font.main};
  font-weight: 700;
  margin-bottom: 20px;
`;

const Subtitle = styled.h3`
  font-size: 16px;
  font-family: ${({theme}) => theme.font.main};
  font-weight: 700;
  margin-bottom: 10px;
`;

const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  button {
    align-self: flex-end;
  }
`;

const InputField = styled.div`
  display: grid;
  grid-template-columns: 40% 1fr;
  margin-bottom: 10px;
  align-items: center;
`;

const AddTransactionModal = ({modalFn}) => {

  const new_ID = random_id();

  const initialState = {
      id: new_ID,
      date: "",
      client: "",
      value: "",
      type: "przychód",
      VAT_level: 23,
      client_address: "",
      document_nr: "",
      NIP_number: ""
  }

  const fade = useSpring({
    from: {
      opacity: 0,
      transform: 'translate3d(0, -40px, 0)'
    },
    to: {
      opacity: 1,
      transform: 'translate3d(0, 0, 0)'
    }
  });
  const [valueGross, setValueGross] = useState(0);

  const [userProfile, dispatch] = useStateValue();

  const [trx, dispatchTrx] = useReducer(reducerTrx, initialState);

  function reducerTrx(state, action){
    switch(action.type) {
      case 'setDate':
        return {
          ...state,
          date: action.value
        };
      case 'setDocumentNumber':
        return {
          ...state,
          document_nr: action.value
        };
      case 'setValue':
        return {
          ...state,
          value: action.value
        };
      case 'setVatLevel':
        return {
          ...state,
          vatLevel: action.value
        };
      case 'setCompany':
        return {
          ...state,
          client: action.value
        };
      case 'setAddress':
        return {
          ...state,
          client_address: action.value
        };
      case 'setNip':
        return {
          ...state,
          nip: action.value
        };
      case 'setType':
        return {
          ...state,
          type: action.value
        }
      case 'setID':
        return {
          ...state,
          id: action.value
        }
      default: 
        return state;
        
    }
  }

  const updateValueGross = () => {
    const vat = document.getElementById("transaction_vat");
    const netto = document.getElementById("transaction_value");
    setValueGross(((vat.value / 100 + 1) * netto.value).toFixed(2));
  };

  return(
    <ModalWrapper>
      {console.log(trx)}
      <Modal style={fade}>
        <CloseModal onClick={() => modalFn(false)}>x</CloseModal>
        <Title>Dodawanie transakcji:</Title>
        <ModalForm onSubmit={(e) => {
          e.preventDefault();
          dispatch({type: 'updateTransactions', value: trx});
          modalFn(false);
        }}>
          <InputField>
            <Label inline htmlFor="transaction_type">Rodzaj transakcji:</Label>
            <Select id="transaction_type" options={["przychód", "wydatek"]} changeFn={dispatchTrx} />
          </InputField>
          <InputField>
            <Label inline htmlFor="transaction_date">Data:</Label>
            <Input id="transaction_date" type="date" onChange={(e) => dispatchTrx({type: 'setDate', value: e.target.value})}/>
          </InputField>
          <InputField>
            <Label inline htmlFor="transaction_documentNumber">Numer dokumentu:</Label>
            <Input id="transaction_documentNumber" type="text" onChange={(e) => dispatchTrx({type: 'setDocumentNumber', value: e.target.value})}></Input>
          </InputField>
          <InputField>
            <Label inline htmlFor="transaction_value">Wartość netto:</Label>
            <Input 
              id="transaction_value" 
              type="number" 
              step="0.01"
              onChange={(e) => {
                dispatchTrx({type: 'setValue', value: e.target.value});
                updateValueGross();
              }}></Input>
          </InputField>
          <InputField>
            <Label inline htmlFor="transaction_vat">Stawka VAT:</Label>
            <Input 
              id="transaction_vat" 
              type="number"  
              onChange={(e) => {
                updateValueGross();
                dispatchTrx({type: 'setVatLevel', value: e.target.value})
              }}></Input>
          </InputField>
          <InputField>
            <Label inline htmlFor="transaction_valueGross">Wartość brutto:</Label>
            <Input id="transaction_valueGross" type="number" value={valueGross} readOnly></Input>
          </InputField>
          <Subtitle>Kontrahent:</Subtitle>
          <InputField>
            <Label inline htmlFor="transaction_client">Nazwa:</Label>
            <Input id="transaction_client" type="text" onChange={(e) => dispatchTrx({type: 'setCompany', value: e.target.value})}></Input>
          </InputField>
          <InputField>
            <Label inline htmlFor="transaction_address">Adres:</Label>
            <Input id="transaction_address" type="text" onChange={(e) => dispatchTrx({type: 'setAddress', value: e.target.value})}></Input>
          </InputField>
          <InputField>
            <Label inline htmlFor="transaction_NIP">NIP:</Label>
            <Input id="transaction_NIP" type="text" onChange={(e) => dispatchTrx({type: 'setNip', value: e.target.value})}></Input>
          </InputField>
          <Button type="submit" as="button" colorstyle="full_green">Dodaj</Button>
        </ModalForm>
      </Modal>
    </ModalWrapper>
  )
};

export default AddTransactionModal;
