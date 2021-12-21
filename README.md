# KHculture_final
_프로젝트 소개 : 다양한 사용자를 대상으로 강좌를 개설하고, 모집 기간에 수강 등록을 하며 이용하는 웹사이트이다. 수강자만 후기를 작성하고 강의평가를 하며 관리자는 이를 통해 강좌의 강사를 관리할 수 있다. 전문성을 갖춘 강사로 구성하여 경쟁력있는 양질의 강의를 제공한다._
###### 레퍼런스한 사이트 : [롯데문화센터](https://culture.lotteshopping.com/index.do)
##### 개발기간 : 2021.10.11 ~ 2021.12.10
##### 구현기간 : 2021.11.22 ~ 2021.12.10
##### 팀원 : 김현주, 양정하, 이지은, 장영재, 황재윤
##### 개발환경 : CSS, HTML5, JAVA, JavaScript, MyBatis, Oracle Cloud, Spring boot
## 설계
[요구사항정의서](https://docs.google.com/spreadsheets/d/18Lmczn86WcsX5lbNCX35jql6p2657HRvTGQ7Zm5Lq_g/edit#gid=0) <br>
[테이블 정의서](https://docs.google.com/spreadsheets/d/18Lmczn86WcsX5lbNCX35jql6p2657HRvTGQ7Zm5Lq_g/edit#gid=1654615687) <br>
[프로세스 맵](https://app.diagrams.net/#G1TPC3d-LJp-VAR7Fh8Tm20O9Yt9ltVx9k) <br>
[ERD 클라우드](https://www.erdcloud.com/d/LrK2KTZodc9zwJnj5) <br>
## 주요기능
+ 로그인
+ 관리자페이지(강사등록, 강의등록)
+ 강의신청(결제,취소)
+ 게시판(공지사항, 강좌후기)
+ 마이페이지(회원정보수정, 내가 쓴 후기내역, 구매내역, 장바구니, 1:1문의)
## 담당기능 <br> : 수강후기, 공지사항, 마이페이지_내가 쓴 수강후기, 마이페이지_수강내역
+ ### 수강후기메인
##### ( 랭킹반영 - 후기 작성일이 SYSDATE-7 AND SYSDATE 인 것 강좌의 개강일과 종강일 LR_START_DATE AND LR_END_DATE+7 )
![수강후기메인](https://user-images.githubusercontent.com/88296704/146856514-f567033e-2f1c-4153-ac85-4ab1b18a523f.png)
+ ### 공지사항메인_관리자버전
![공지사항메인_관리자버전](https://user-images.githubusercontent.com/88296704/146857090-84c05d3e-a415-46d1-ab3a-7255e9ffb91e.png)
+ ### 공지사항메인_일반유저
![공지사항메인_일반유저](https://user-images.githubusercontent.com/88296704/146857159-2ff607a6-1f2e-44af-8de5-409eec1532e2.png)
+ ### 마이페이지_내가 쓴 수강후기
![마이페이지_내가 쓴 수강후기](https://user-images.githubusercontent.com/88296704/146857519-03c4873c-6e9f-464c-a4b1-51b3fb791f62.PNG)
+ ### 마이페이지_수강내역
![마이페이지_수강내역](https://user-images.githubusercontent.com/88296704/146857566-9bab0e23-e778-4203-8a71-e16a0134a456.png)

## 자세한 기능설명 : [포토폴리오](https://www.notion.so/b17319afa9c34998b6c0250da4676537)
 
