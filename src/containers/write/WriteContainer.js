import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BoardWrite from '../../components/BoardWrite';
import { changeField, initialize } from '../../modules/write';

const WriteContainer = () => {
  const dispatch = useDispatch();
  const { name, content } = useSelector(({ write }) => ({
    name: write.name,
    content: write.content,
  }));
  const onChangeField = useCallback((payload) => dispatch(changeField(payload)), [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return <BoardWrite onChangeField={onChangeField} name={name} content={content} />;
};

export default WriteContainer;
