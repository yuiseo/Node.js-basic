const path = require('path')

/**
 * 윈도우 경로 
 * C:\users\iseo
 * 
 * 맥
 * \user\iseo
 * 
 * 경로  처리시 이 각각을 따로 처리하기 어려운데
 * path가 알아서  다 처리 해줌
 */

/**
 * .경로 예시
 *  C:\nodejs-book\lecture\var.js
 */
path.join(__dirname,'var.js')

/**
 * .경로 예시
 *  C:\nodejs-book\var.js
 */
path.join(__dirname,'..','var.js')

/**
 * .경로 예시
 * C:\var.js
 */
path.resolve(__dirname,'..','/var.js')

