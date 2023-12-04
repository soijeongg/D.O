// 페이지 로드 시 챗봇의 첫 메시지를 추가합니다.
document.addEventListener('DOMContentLoaded', function() {
    addChatMessage("Bot", "무엇을 도와드릴까요?", getTime());
    toggleSpinner(false); // 스피너 비활성화
});

// 메시지 보내기 이벤트 리스너들
document.getElementById('send-btn').addEventListener('click', sendUserMessage);
document.getElementById('chat-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendUserMessage();
    }
});

// 이미지를 생성하고 설정하는 함수
function addImage(imgPath, altText) {
    var img = document.createElement('img'); // 새 이미지 요소 생성
    img.src = imgPath; // 이미지 경로 설정
    img.alt = altText; // 대체 텍스트 설정
    img.classList.add('avatar'); // CSS 클래스 추가
  
    return img; // 생성된 이미지 요소 반환
  }


// 스피너 토글 함수입니다.
function toggleSpinner(show) {
    var spinner = document.querySelector('.spinner-container');
    spinner.style.display = show ? 'flex' : 'none'; // 스피너 표시 상태 설정
}

// 현재 시간 함수
function getTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();

    // 시간 형식을 맞추기 위해 0을 추가
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return hours + ':' + minutes;
}

// 사용자가 메시지를 보낼 때 실행됩니다.
function sendUserMessage() {
    var input = document.getElementById('chat-input');
    var message = input.value.trim();
    if (message !== "") {
        addChatMessage("User", message, getTime() );
        input.value = '';
        toggleSpinner(true); // 사용자가 메시지를 보낼 때 스피너 활성화
        // 챗봇의 답변을 시뮬레이션합니다.
        setTimeout(function() {
            addChatMessage("Bot", "챗봇의 응답입니다.", getTime());
            toggleSpinner(false); // 답변 후 스피너 비활성화
        }, 500); // 2초 후 챗봇의 답변이 표시됩니다.
    }
}


// 채팅창에 메시지 요소를 추가하는 함수입니다.
function addChatMessage(sender, text, time) {
    var chatBox = document.getElementById('chat-box');
    var messageWrapper = document.createElement('div');   // 감싸줘~
    messageWrapper.classList.add('chat-message', sender.toLowerCase() + '-message');
    
    // var avatarImg = document.createElement('img');
    // avatarImg.classList.add('avatar');
    // avatarImg.src = sender === "Bot" ? "chatbot.png" : "user.png";
    // // 발신자가 'User'인 경우와 'Bot'인 경우에 따라 이미지 경로를 설정합니다.
    // if (sender === "User") {
    //     avatarImg.src = "C:\Users\gjaischool\Desktop\FE\images\user.png"; // 사용자 아바타 이미지 경로
    // } else if (sender === "Bot") {
    //     avatarImg.src = "C:\Users\gjaischool\Desktop\FE\images\chatbot.png"; // 챗봇 아바타 이미지 경로
    // }
    // avatarImg.alt = sender + " Avatar"; // 대체 텍스트 설정

    
    var imgPath = sender === "Bot" ? "/images/chatbot.png" : "/images/user.png";      // 이미지 파일 경로와 대체 텍스트
    var altText = sender === "Bot" ? "Bot Avatar" : "User Avatar";
    
    var avatarImg = addImage(imgPath, altText); // 이미지 요소를 생성하는 함수 호출

    var messageName = document.createElement("div");
    messageName.classList.add("message-name");

    var senderName = document.createElement('div');
    senderName.classList.add('sender-name');
    senderName.textContent = sender;
    
    var chatBubble = document.createElement('div');
    chatBubble.classList.add('chat-bubble');
    chatBubble.textContent = text;
    
    var timestamp = document.createElement('div');
    timestamp.classList.add('timestamp');
    timestamp.textContent = time;
    
    messageName.appendChild(senderName);
    messageName.appendChild(chatBubble);
    if (sender === "User") {
        messageWrapper.appendChild(timestamp);
        messageWrapper.appendChild(messageName);
        // messageWrapper.appendChild(chatBubble);
        // messageWrapper.appendChild(senderName);
        messageWrapper.appendChild(avatarImg);
    } else {
        messageWrapper.appendChild(avatarImg);
        messageWrapper.appendChild(messageName);
        // messageWrapper.appendChild(senderName);
        // messageWrapper.appendChild(chatBubble);
        messageWrapper.appendChild(timestamp);
    }
    
    chatBox.appendChild(messageWrapper);
    chatBox.scrollTop = chatBox.scrollHeight;
}
