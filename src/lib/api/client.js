import axios from 'axios';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjYyMGJmYWRmMDYxNDAwMTE4Y2E0NzgiLCJpYXQiOjE2MDAyNjExMTQsImV4cCI6MTYwMDM0NzUxNH0.K1xV-0ow4QQ82HMhe11ILJCO-B_5fp1ibBeKJmltank';
const client = axios.create({ baseURL: 'http://dauth.daios.net', headers: { 'x-access-token': token } });

export default client;
