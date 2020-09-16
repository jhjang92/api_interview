import client from './client';

export const writeBoard = ({ nickName, content }) => client.post('/v1/boards', { nickName, content });

//
