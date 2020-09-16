import React from 'react';
import styled from 'styled-components';

const BoardWrite = ({ name, content, onChangeField }) => {
  const onChangeTaget = (e) => {
    console.log(e.target.name);
    onChangeField({ key: e.target.name, value: e.target.value });
  };

  return (
    <Section>
      <h3>글쓰기</h3>
      <Form>
        <StyledSpan>작성자 : </StyledSpan>
        <WriteInput type="text" name="name" onChange={onChangeTaget}></WriteInput>
        <Br />
        <StyledSpan>내용 : </StyledSpan>
        <TextArea type="text" name="content" onChange={onChangeTaget}></TextArea>
        <Br />
        <StyledButton type="button">등록하기</StyledButton>
      </Form>
    </Section>
  );
};

const Section = styled.section`
  margin: 20px 0 0;
`;
const Form = styled.form`
  margin: 30px 0 0 30px;
  width: 250px;
`;
const StyledSpan = styled.span`
  width: 70px;
  display: inline-block;
`;
const WriteInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
`;
const TextArea = styled.textarea`
  display: block;
  width: 100%;
  box-sizing: border-box;
`;
const Br = styled.div`
  padding: 10px 0;
`;
const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  outline: none;
  background: black;
  color: white;
  width: 100%;
  padding: 5px 0;
  cursor: pointer;
  &:hover {
    background: gray;
  }
  &:active {
    background: black;
  }
`;
export default BoardWrite;
