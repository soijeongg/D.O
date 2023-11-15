## 엔터 눌렀을 때도 동작하도록
$('#memoChatButtonInput').keydown(function(keyNum){
    if (keyNum.keyCode == 13) {
        $('#memoChatButton').click();
        return false
    };
});

function addMessage(message, sender) {
    var chatBody = document.getElementById('chat-body');
    var messageContainer = document.createElement('div');
    var messageBubble = document.createElement('div');
    var messageSender = document.createElement('div');
    var messageTime = document.createElement('div');

    messageContainer.className = 'message-container';
    messageBubble.className = 'message-bubble';
    messageSender.className = 'message-sender';
    messageTime.className = 'message-time';

    messageBubble.textContent = message;
    messageSender.textContent = sender;
    messageTime.textContent = getTime(); // 현재 시간을 얻어옴

    messageContainer.appendChild(messageBubble);
    messageContainer.appendChild(messageSender);
    chatBody.appendChild(messageContainer);

    chatBody.scrollTop = chatBody.scrollHeight;
}
function getTime() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();

        // 시간 형식을 맞추기 위해 0을 추가
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;

        return hours + ':' + minutes;
    }

// 초기 대화 시작
setTimeout(function () {
    addMessage('안녕하세요! 어떤 도움이 필요하세요?', '챗봇');
}, 500);
    // 버튼 클릭 이벤트 처리
        $("#toyou").click(function () {
            // 입력된 데이터 가져오기

            let inputData = $("#message-input").val();  // message-input의 값만 가져오기
            if (inputData !== '') {
                //  text 변수에 저장

                let text = $(".message-container");



                // text에 append해 요소 추가
                text.append( '<div class = "message-bubble">' +
                    "<div class='user-message'>" + inpu

function addMessage(message, sender) {
    var chatBody = document.getElementById('chat-body');
    var messageContainer = document.createElement('div');
    var messageBubble = document.createElement('div');
    var messageSender = document.createElement('div');
    var messageTime = document.createElement('div');

    messageContainer.className = 'message-container';
    messageBubble.className = 'message-bubble';
    messageSender.className = 'message-sender';
    messageTime.className = 'message-time';

    messageBubble.textContent = message;
    messageSender.textContent = sender;
    messageTime.textContent = getTime(); // 현재 시간을 얻어옴

    messageContainer.appendChild(messageBubble);
    messageContainer.appendChild(messageSender);
    chatBody.appendChild(messageContainer);

    chatBody.scrollTop = chatBody.scrollHeight;
}
function getTime() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();

        // 시간 형식을 맞추기 위해 0을 추가
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;

        return hours + ':' + minutes;
    }

// 초기 대화 시작
setTimeout(function () {
    addMessage('안녕하세요! 어떤 도움이 필요하세요?', '챗봇');
}, 500);
    // 버튼 클릭 이벤트 처리
        $("#toyou").click(function () {
            // 입력된 데이터 가져오기

            let inputData = $("#message-input").val();  // message-input의 값만 가져오기
            if (inputData !== '') {
                //  text 변수에 저장

                let text = $(".message-container");



                // text에 append해 요소 추가
                text.append( '<div class = "message-bubble">' +
                    "<div class='user-message'>" + inputData  + "</div>" + "</div>"+  "<div class = 'message-sender'>" + "나"+"</div>");


                // fastapi의 BaseModel은 JSON 형식을 받는데 그냥 data로 보내면 오류남
                // contentType으로 JSON임을 알려주고 JSON.stringify로 데이터를 JSON으로 변환

                $.ajax({
                    type: "post", // 어떤 방식으로 보낼지
                    url: "/dobot",  // 보낼 주소
                    contentType: "application/json",  // 서버에 JSON 형식임을 알려줌
                    data: JSON.stringify({ data: inputData }),  // 데이터를 JSON 문자열로 변환

                    // 성공적인 전송시 서버에서 반환된 response 받음
                    success: function (response) {
                        // 서버 응답을 성공하면 실행

                        text.append('<div class = "message-bubble">' +
                            "<div class='bot-message'>" + response.processed_data  + "</div>" + "</div>" + "<div class = 'message-sender'>" + "챗봇" + "</div>");

                    },

                    error: function () {
                        alert("실패");
                    }

                });


                $("#message-input").val('');  // 입력 필드 새로고침
            }

        });

                // 엔터시 작동
         $("#message-input").keyup(function (event) {
             if (event.key === 'Enter') {
                // 입력된 데이터 가져오기

                let inputData = $("#message-input").val();  // message-input의 값만 가져오기
                 if (inputData !== '') {
                     //  text 변수에 저장

                     let text = $(".message-container");



                     // text에 append해 요소 추가
                     text.append('<div class = "message-bubble">' +
                         "<div class='user-message'> ${inputData} </div>" + "</div>" + "<div class = 'message-sender'>" + "나" + "</div>");


                     // fastapi의 BaseModel은 JSON 형식을 받는데 그냥 data로 보내면 오류남
                     // contentType으로 JSON임을 알려주고 JSON.stringify로 데이터를 JSON으로 변환

                     $.ajax({
                         type: "post", // 어떤 방식으로 보낼지
                         url: "/dobot",  // 보낼 주소
                         contentType: "application/json",  // 서버에 JSON 형식임을 알려줌
                         data: JSON.stringify({ data: inputData }),  // 데이터를 JSON 문자열로 변환

                         // 성공적인 전송시 서버에서 반환된 response 받음
                         success: function (response) {
                             // 서버 응답을 성공하면 실행

                             text.append('<div class = "message-bubble">' +
                                 "<div class='bot-message'>" + response.processed_data + "</div></div><div class = 'message-sender'>챗봇</div>");

                         },


                         error: function () {
                             alert("실패");
                         }

                     });


                     $("#message-input").val('');  // 입력 필드 새로고침
                 }

             }});


tData  + "</div>" + "</div>"+  "<div class = 'message-sender'>" + "나"+"</div>");


                // fastapi의 BaseModel은 JSON 형식을 받는데 그냥 data로 보내면 오류남
                // contentType으로 JSON임을 알려주고 JSON.stringify로 데이터를 JSON으로 변환

                $.ajax({
                    type: "post", // 어떤 방식으로 보낼지
                    url: "/dobot",  // 보낼 주소
                    contentType: "application/json",  // 서버에 JSON 형식임을 알려줌
                    data: JSON.stringify({ data: inputData }),  // 데이터를 JSON 문자열로 변환

                    // 성공적인 전송시 서버에서 반환된 response 받음
                    success: function (response) {
                        // 서버 응답을 성공하면 실행

                        text.append('<div class = "message-bubble">' +
                            "<div class='bot-message'>" + response.processed_data  + "</div>" + "</div>" + "<div class = 'message-sender'>" + "챗봇" + "</div>");

                    },

                    error: function () {
                        alert("실패");
                    }

                });


                $("#message-input").val('');  // 입력 필드 새로고침
            }

        });

                // 엔터시 작동
         $("#message-input").keyup(function (event) {
             if (event.key === 'Enter') {
                // 입력된 데이터 가져오기

                let inputData = $("#message-input").val();  // message-input의 값만 가져오기
                 if (inputData !== '') {
                     //  text 변수에 저장

                     let text = $(".message-container");



                     // text에 append해 요소 추가
                     text.append('<div class = "message-bubble">' +
                         "<div class='user-message'>" + inputData + "</div>" + "</div>" + "<div class = 'message-sender'>" + "나" + "</div>");


                     // fastapi의 BaseModel은 JSON 형식을 받는데 그냥 data로 보내면 오류남
                     // contentType으로 JSON임을 알려주고 JSON.stringify로 데이터를 JSON으로 변환

                     $.ajax({
                         type: "post", // 어떤 방식으로 보낼지
                         url: "/dobot",  // 보낼 주소
                         contentType: "application/json",  // 서버에 JSON 형식임을 알려줌
                         data: JSON.stringify({ data: inputData }),  // 데이터를 JSON 문자열로 변환

                         // 성공적인 전송시 서버에서 반환된 response 받음
                         success: function (response) {
                             // 서버 응답을 성공하면 실행

                             text.append('<div class = "message-bubble">' +
                                 "<div class='bot-message'>" + response.processed_data + "</div>" + "</div>" + "<div class = 'message-sender'>" + "챗봇" + "</div>");

                         },


                         error: function () {
                             alert("실패");
                         }

                     });


                     $("#message-input").val('');  // 입력 필드 새로고침
                 }

             }});