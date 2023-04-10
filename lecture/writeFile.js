const fs = require('fs').promises

fs.writeFile('./writeme.txt','node를 공부하게 되었다..')
  .then(()=>{

  })
  .catch((err)=>{
    throw err
  })