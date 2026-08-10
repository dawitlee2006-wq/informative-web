// HTML의 <form class="inputbox"> 요소를 선택합니다.
const searchForm = document.querySelector(".inputbox");
// form 내부에 있는 text input 요소를 선택합니다.
const searchInput = searchForm.querySelector("input[type='text']");

// 폼이 제출(검색 버튼 클릭 또는 엔터키 입력)될 때 이벤트 실행
searchForm.addEventListener("submit", function(event) {
    event.preventDefault(); // 페이지 새로고침 방지

    // 입력창의 텍스트를 가져와 양쪽 공백 제거
    const query = searchInput.value.trim().toLowerCase();

    // 모든 도시 카드를 선택 (.city_list 내부의 div)
    const cityCards = document.querySelectorAll(".city_list > div");

    // 각 도시 카드를 하나씩 확인
    cityCards.forEach(function(card) {
        // 카드 내의 .cityname 텍스트 가져오기
        const cityNameElement = card.querySelector(".cityname");
        const cityName = cityNameElement.textContent.trim().toLowerCase();

        // 검색어가 도시 이름에 포함되어 있는지 확인
        if (cityName.includes(query)) {
            card.style.display = ""; // 조건에 맞으면 화면에 표시
        } else {
            card.style.display = "none"; // 조건에 안 맞으면 숨김
        }
    });
});

