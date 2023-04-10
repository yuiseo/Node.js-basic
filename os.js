const os = require('os')
// 컴퓨터의   core 수를 알 수 있음
// os의 스레드 !== node의 스레드
console.log(os.cpus())