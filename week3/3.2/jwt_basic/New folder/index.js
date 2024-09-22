const jwt=require('jsonwebtoken');
const value={
    username:'mayank@gmail.com',
    password:'mayank2104'
}
const token=jwt.sign(value,'mayank');
console.log(token);
const v=jwt.verify(`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1heWFua0BnbWFpbC5jb20iLCJwYXNzd29yZCI6Im1heWFuazIxMDQiLCJpYXQiOjE3MjQ4NTA4NTh9.ecd2NdqQ6papT22XUSS6oWtN3qUawZZmlvnVH53vAfc`,'mayank')
console.log(v);
