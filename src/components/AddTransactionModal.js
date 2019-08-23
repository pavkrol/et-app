import React, {useState} from 'react';
import styled from 'styled-components';
import Label from '../components/Label';
import Input from '../components/Input';
import Button from '../components/Button';

const ModalWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.4);
  top: 0;
  left: 0;
`;

const Modal = styled.div`
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
  
  
  const [date, setDate] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [value, setValue] = useState("");
  const [vatLevel, setVatLevel] = useState(23);
  const [valueGross, setValueGross] = useState(0);
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [nip, setNip] = useState("");
  
  const updateValueGross = () => {
    const vat = document.getElementById("transaction_vat");
    const netto = document.getElementById("transaction_value");
    setValueGross(((vat.value / 100 + 1) * netto.value).toFixed(2));
  };

  const addTransaction = (date,documentNumber,value,vatLevel,company,address,nip) => {
    const newTransaction = {
      id: 123,
      date: date,
      client: company,
      value: value,
      type: "wydatek",
      VAT_level: vatLevel / 100,
      client_address: address,
      document_nr: documentNumber,
      NIP_number: nip
    }
    console.log(newTransaction);
  };

  return(
    <ModalWrapper>
      <Modal>
        <CloseModal onClick={() => modalFn(false)}>x</CloseModal>
        <Title>Dodawanie transakcji:</Title>
        <ModalForm onSubmit={(e) => {
          e.preventDefault();
          addTransaction(date,documentNumber,value,vatLevel,company,address,nip);
          modalFn(false);
        }}>
          <InputField>
            <Label inline htmlFor="transaction_date">Data:</Label>
            <Input id="transaction_date" type="date" onChange={(e) => setDate(e.target.value)}></Input>
          </InputField>
          <InputField>
            <Label inline htmlFor="transaction_documentNumber">Numer dokumentu:</Label>
            <Input id="transaction_documentNumber" type="text" onChange={(e) => setDocumentNumber(e.target.value)}></Input>
          </InputField>
          <InputField>
            <Label inline htmlFor="transaction_value">Wartość netto:</Label>
            <Input 
              id="transaction_value" 
              type="number" 
              onChange={(e) => {
                setValue(e.target.value);
                updateValueGross();
              }}></Input>
          </InputField>
          <InputField>
            <Label inline htmlFor="transaction_vat">Stawka VAT:</Label>
            <Input 
              id="transaction_vat" 
              type="number" 
              value={vatLevel} 
              onChange={(e) => {
                updateValueGross();
                setVatLevel(e.target.value);
              }}></Input>
          </InputField>
          <InputField>
            <Label inline htmlFor="transaction_valueGross">Wartość brutto:</Label>
            <Input id="transaction_valueGross" type="number" value={valueGross} readOnly></Input>
          </InputField>
          <Subtitle>Kontrahent:</Subtitle>
          <InputField>
            <Label inline htmlFor="transaction_client">Nazwa:</Label>
            <Input id="transaction_client" type="text" onChange={(e) => setCompany(e.target.value)}></Input>
          </InputField>
          <InputField>
            <Label inline htmlFor="transaction_address">Adres:</Label>
            <Input id="transaction_address" type="text" onChange={(e) => setAddress(e.target.value)}></Input>
          </InputField>
          <InputField>
            <Label inline htmlFor="transaction_NIP">NIP:</Label>
            <Input id="transaction_NIP" type="text" onChange={(e) => setNip(e.target.value)}></Input>
          </InputField>
          <Button type="submit" as="button" colorstyle="full_green">Dodaj</Button>
        </ModalForm>
      </Modal>
    </ModalWrapper>
  )
};

export default AddTransactionModal;
