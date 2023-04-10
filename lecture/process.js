// 이벤트 루프가 다른 콜백 함수들보다 nextTick의 콜백 함수를 우선적으로 처리
// 비슷한 경우로 Promise가 있음 (nextTick처럼 우선순위가 높음)

setImmediate(()=>{
  console.log('immediate')
})

process.nextTick(()=>{
  console.log('nextTick')
})

setTimeout(()=>{
  console.log('timeout')
},0)

Promise.resolve().then(()=>console.log('promise'))

/**
 * <console>
 * nextTick 
 * Promise
 * timeout
 * immediate
 */