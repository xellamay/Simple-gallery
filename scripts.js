/* При клике делает секцию активной 
1.добавить обработчик клика на элемент
2. убедиться что рабоатет
3. менять класс
*/
const items = document.querySelectorAll(".gallery__section");

function clearClass() {
    items.forEach((item) => {
        item.classList.remove("gallery__section_active")
    })
}

items.forEach((item) => {
    item.addEventListener("click", function() {
        clearClass();
        item.classList.add("gallery__section_active")
    });
});