// HTML의 <form class="inputbox"> 요소를 선택합니다.
const searchForm = document.querySelector(".inputbox");
// form 내부에 있는 text input 요소를 선택합니다.
const searchInput = searchForm.querySelector("input[type='text']");

const nocitymessage=document.querySelector(".nocity");


// 폼이 제출(검색 버튼 클릭 또는 엔터키 입력)될 때 이벤트 실행
searchForm.addEventListener("submit", function(event) {
    event.preventDefault(); // 페이지 새로고침 방지

    // 입력창의 텍스트를 가져와 양쪽 공백 제거
    const query = searchInput.value.trim().toLowerCase();

    // 모든 도시 카드를 선택 (.city_list 내부의 div)
    const cityCards = document.querySelectorAll(".city_list > div");
    let cardFound = false; //검색어에 맞는 카드가 있는지 확인하는 변수

    // 각 도시 카드를 하나씩 확인
    cityCards.forEach(function(card) {
        // 카드 내의 .cityname 텍스트 가져오기
        const cityNameElement = card.querySelector(".cityname");
        const cityName = cityNameElement.textContent.trim().toLowerCase();

        // 검색어가 도시 이름에 포함되어 있는지 확인
        if (cityName.includes(query)) {
            card.style.display = "block"; // 카드 표시
            cardFound = true; // 검색어에 맞는 카드가 존재함
            nocitymessage.hidden=true;
        } else {
            card.style.display = "none";
        }
    });

    if (!cardFound) {
        cityCards.forEach(function(card) {
            card.style.display = "block"; //모든 카드 표시
            nocitymessage.hidden=false;
        });
    }
});

