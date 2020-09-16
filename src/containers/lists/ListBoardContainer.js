import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BoardList from '../../components/BoardList';
import { m_listBoard } from '../../modules/listBoard';

const ListBoardContainer = () => {
  const dispatch = useDispatch();
  const { datas, error, loading } = useSelector(({ listBoard, loading }) => ({
    datas: listBoard.datas,
    error: listBoard.error,
    loading: loading['boards/LIST_BOARD'],
  }));

  useEffect(() => {
    dispatch(m_listBoard());
  }, [dispatch]);

  if (error) {
    return <div>{error.message}</div>;
  }

  return <BoardList loading={loading} error={error} datas={datas} />;
};

export default ListBoardContainer;
