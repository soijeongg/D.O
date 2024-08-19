# 음식점 이용 고객응답 챗봇 서비스 D.O
![chatbot](https://github.com/user-attachments/assets/9a452b31-a463-45a2-ae41-d348b85744ae)

## 📈 서비스 소개
음식점을 이용하는 고객을 위한 챗봇 서비스로 단순 주문 뿐만 아니라 고객의 문의를 대응

ex) 짬뽕 많이 맵나요?, 언제까지 영업하나요? 등

챗봇을 이용해 24시간 연중 무휴 서비스가 가능할 뿐만 아니라 언제든지 고객문의를 신속하게 대응해 서비스의 접근성이 높음

비대면 , 감전소모 없는 챗봇으로 편리하게 이용가능

# 기술스택
<div align=center>
<img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white"> 
<img src="https://img.shields.io/badge/fastapi-009688?style=for-the-badge&logo=fastapi&logoColor=white">
<img src="https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white">
<img src="https://img.shields.io/badge/AJAX-47A248?style=for-the-badge&logo=AJAX&logoColor=white">
<img src="https://img.shields.io/badge/jinja-B41717?style=for-the-badge&logo=jinja&logoColor=white">

<br>
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=black"> 

<br>
 <img src="https://img.shields.io/badge/pytorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=black"> 
  <img src="https://img.shields.io/badge/Transformers-F7DF1E?style=for-the-badge&logo=Transformers&logoColor=black"> 
 <img src="https://img.shields.io/badge/BERT-E34F26?style=for-the-badge&logo=BERT&logoColor=black"> 
  <img src="https://img.shields.io/badge/GPT2-181717?style=for-the-badge&logo=GPT2&logoColor=black"> 

  <br>
   <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
   <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">

</div>

# AI_Model 생성

## 데이터 수집 및 전처리
AI Hub를 사용해 음식점 대화 데이터셋 29만건과  이외의 데이터셋 10만건의 데이터 수집 및 전처리

## Intent classifier
Data 전처리 후 tokenizer label Encoder -> Menu DataSet -> Train: Val 분리 -> 하이퍼 파아미터 설정 -> Data Loacer -> BERT 사용 모델 클래스 구현 -> 학습 및 검증

## Response Generator
Model Tokenizer -> Custom Dataset -> chat DataSet ->  Train: Val 분리 -> 하이퍼 파아미터 설정 -> Data Loacer -> GPT 활용 모델 학습 -> 검증 및 평가

## OOD Classifier
Data Load -> KyKim 활용 -> SBERT 활용 -> Tral EX 설정 Data Loacer - Triplet Loss 정의 -> SBERT 모델 학습 -> UMAP 2차원 ->1차원 -> 평가

# 챗봇 기능 소개
![사물지능A_DO_PPT최종본_18](https://github.com/user-attachments/assets/f3a5dda2-afcf-419b-9f18-d6ba2818c08f)
![사물지능A_DO_PPT최종본_19](https://github.com/user-attachments/assets/ab3d6686-99cf-4727-9d26-27db89a91ca0)
### 단순 주문 뿐만이 아니라 고객의 문의를 대응
  ex) 짬뽕 많이 맵나요?, 언제까지 영업하나요? 등
  
  챗봇을 통해 고객 맞춤형 서비스 및 비용 절감
![사물지능A_DO_PPT최종본_20](https://github.com/user-attachments/assets/e1d5834f-d456-412d-b72b-8d8852a1bdf4)

### 챗봇뿐만이 아니라 룰렛, 사다리 타기, 맛집 지도등의 부가적인 서비스 제공

![KakaoTalk_20231202_155012900](https://github.com/user-attachments/assets/c1ee2b9a-2abd-4f9b-9714-5ac947474700)

![KakaoTalk_20231202_155017031](https://github.com/user-attachments/assets/950be3fe-b122-4a17-87bb-a38cb520c738)
![KakaoTalk_20231202_150427836](https://github.com/user-attachments/assets/901a2a03-448c-424c-b93f-bf8df5a446f5)

## 개선할점
고객의 별점 피드백 기능을 추가하여 서비스를 개선해 나갈 수 있도록 함

로그인시 리프레시 토큰 구현

## 활용방안
기록을 통해 고객의 니즈를 분석해 현재 가게에 어떤 메뉴가 인기 있는지 피드백이 가능함 
배달 어플등 다양한 어플과 결합하여 다양한 형태로 사용이 가능함
