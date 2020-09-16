import client, { getConfig, postConfig } from './client';

export const writeBoard = ({ nickName, content }) => client.post('/v1/boards', { nickName, content }, postConfig);

export const listBoards = () => client.get('/v1/boards', getConfig);
