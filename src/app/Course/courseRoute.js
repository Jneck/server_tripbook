module.exports = function(app){
    const jwtMiddleware = require('../../../config/jwtMiddleware');    
    const course = require('./courseController.js.js');


    // 0. 테스트 API
    app.get('/app/test/course', course.getTest);
    
    
    /** 여기서 부터 트립북 프로젝트
     * -발자국 보기 페이지
     */
    app.get('/app/course', course.getCourse);
 


};


// TODO: 자동로그인 API (JWT 검증 및 Payload 내뱉기)
// JWT 검증 API
// app.get('/app/auto-login', jwtMiddleware, user.check);

// TODO: 탈퇴하기 API

   