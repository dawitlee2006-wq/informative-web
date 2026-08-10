// HTML 요소 선택
const searchForm = document.querySelector(".formbox");
const searchInput = searchForm.querySelector("input[type='text']");
const alertMessage = searchForm.querySelector(".alertmessage");
const cityCards = document.querySelectorAll(".city_list > a");

searchForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const query = searchInput.value.trim().toLowerCase();

    // 1. 빈 검색어 입력 처리
    if (!query) {
        cityCards.forEach(card => card.style.display = ""); // 초기 CSS 레이아웃으로 복원
        alertMessage.hidden = true;
        return;
    }

    let cardFound = false;

    // 2. 카드 필터링 처리
    cityCards.forEach(function(card) {
        const cityNameElement = card.querySelector(".cityname");
        const cityName = cityNameElement ? cityNameElement.textContent.trim().toLowerCase() : "";

        if (cityName.includes(query)) {
            card.style.display = ""; // 원래 스타일 유지
            cardFound = true;
        } else {
            card.style.display = "none";
        }
    });

    // 3. 검색 결과 유무에 따른 경고 메시지 및 카드 처리 (루프 종료 후 1회 실행)
    if (!cardFound) {
        cityCards.forEach(card => card.style.display = ""); // 결과가 없을 때 전체 표시
        alertMessage.hidden = false;
    } else {
        alertMessage.hidden = true;
    }
});