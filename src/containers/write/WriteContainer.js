import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BoardWrite from '../../components/BoardWrite';
import { changeField, initialize, m_writeBoard } from '../../modules/write';

const WriteContainer = () => {
  const dispatch = useDispatch();
  const { nickName, content, board, boardError } = useSelector(({ write }) => ({
    nickName: write.nickName,
    content: write.content,
    boardError: write.boardError,
  }));
  const onChangeField = useCallback((payload) => dispatch(changeField(payload)), [dispatch]);
  const onPublish = () => {
    dispatch(
      m_writeBoard({
        nickName,
        content,
      }),
    );
  };

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  if (boardError !== null) {
    return <div>{boardError.message}</div>;
  }
  return <BoardWrite onChangeField={onChangeField} onPublish={onPublish} />;
};

export default WriteContainer;
