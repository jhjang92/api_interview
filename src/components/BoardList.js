import React from 'react';
import styled from 'styled-components';

const BoardListItem = () => {
  return (
    <TBody_Tr>
      <td>장재혁</td>
      <td>안녕하세요</td>
      <td>2020.09.16</td>
      <td>1v</td>
    </TBody_Tr>
  );
};

const BoardList = () => {
  return (
    <Section>
      <h3>게시판 목록</h3>
      <Table>
        <thead>
          <tr>
            <th>작성자 닉네임</th>
            <th>내용</th>
            <th>생성일</th>
            <th>버전정보</th>
          </tr>
        </thead>
        <tbody>
          <BoardListItem />
          <BoardListItem />
        </tbody>
      </Table>
    </Section>
  );
};
const Section = styled.section`
  margin: 100px 0 0;
`;
const Table = styled.table`
  width: 100%;
  thead {
    tr {
      th {
        font-size: 16px;
        padding: 10px 20px;
      }
    }
  }
`;
const TBody_Tr = styled.tr`
  td {
    text-align: center;
    padding: 10px 0;
  }
`;
export default BoardList;
