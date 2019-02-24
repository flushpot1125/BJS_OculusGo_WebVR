'use strict';
const express = require('express');
const app = express();
app.use(express.static('./'));
app.listen(9002, ()=> { //ポート番号は任意に変更可能
  console.log('Server Start:address is http://localhost:9002');
});