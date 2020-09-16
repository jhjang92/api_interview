import React from 'react';
import styled from 'styled-components';

const BoardListItem = ({ id, nickName, content, createdAt, version }) => {
  const regTime = new Date(createdAt);
  const date = regTime.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <TBody_Tr>
      <td>{id}</td>
      <td>{nickName}</td>
      <td>{content}</td>
      <td>{date}</td>
      <td>{version}</td>
    </TBody_Tr>
  );
};

const BoardList = ({ datas, loading }) => {
  return (
    <Section>
      <h3>게시판 목록</h3>
      {!loading && datas && (
        <Table>
          <thead>
            <tr>
              <th>id</th>
              <th>작성자 닉네임</th>
              <th>내용</th>
              <th>생성일</th>
              <th>버전정보</th>
            </tr>
          </thead>
          <tbody>
            {datas.data.map((data) => (
              <BoardListItem key={data._id} id={data._id} nickName={data.nickName} content={data.content} createdAt={data.createdAt} version={data.__v} />
            ))}
          </tbody>
        </Table>
      )}
    </Section>
  );
};
const Section = styled.section`
  margin: 100px 0 0;
  height: 600px;
  overflow-y: auto;
`;
const Table = styled.table`
  width: 100%;
  thead {
    tr {
      th {
        font-size: 14px;
        padding: 10px 10px;
      }
    }
  }
`;
const TBody_Tr = styled.tr`
  td {
    text-align: center;
    padding: 10px 5px;
    font-size: 11px;
    :nth-of-type(2) {
      width: 180px;
    }
    :nth-of-type(3) {
      width: 180px;
    }
  }
`;
export default BoardList;
