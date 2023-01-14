// 1. Делаем базу супергероев Марвел. На основе статьи 
// [https://www.ellegirl.ru/articles/vse-o-15-samyih-krutyih-supergeroyah/]
// составьте JSON с массивом супергероев. Сделайте страничку-галерею, где можно будет просматривать 
// информацию о героях по этим данным.
    
//     Что должна уметь страничка: 
    
//     - показать информацию о героях: их картинки, характеристики, подробное описание
//     - поставить герою личную оценку (*сохраняем значения в localStorage*)
//     например, 10/10 или 2/10, как рейтинг


let json = `[{
    "avatar": "https://cdnstatic.rg.ru/uploads/images/224/98/74/bet.jpg",
    "name": "Бэтмэн",
    "universe": "DC Comics",
    "alter": "Брюс Уэйн",
    "activity": "борец с преступностью, филантроп, миллиардер",
    "friends": "Робин, Бэтгерл",
    "superpower": "интеллект, обширные познания, знания боевых искусств, ловкость"
}, {
    "avatar": "https://img.championat.com/c/900x900/news/big/w/w/velichajshij-supermen-vseh-vremyon-zak-snajder-o-vozvraschenii-genri-kavilla-k-roli-geroya_16668524662058544203.jpg",
    "name": "Супермен",
    "universe": "DC Comics",
    "alter": "Кларк Кент",
    "activity": "борец за справедливость",
    "friends": "собака Крипто",
    "superpower": "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм"
},{
    "avatar": "https://upload.wikimedia.org/wikipedia/ru/thumb/a/a5/Iron_man.jpg/224px-Iron_man.jpg",
    "name": "Железный человек",
    "universe": "Marvel Comics",
    "alter": "Тони Старк",
    "activity": "гений, миллиардер, плейбой, филантроп",
    "friends": "Мстители",
    "superpower": "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы"
}]`;

document.addEventListener("DOMContentLoaded", function
(event) {
    let heroes = JSON.parse(json);
    
    let heroesContent = "";
    for (let heroe of heroes) {
        heroesContent += `<div class="hero"> 
        <div><img src="${heroe.avatar}"></div>
        <h2>${heroe.name}</h2>
        <h3>Вселенная: ${heroe.universe}</h3>
        <h3>Альтер-эго: ${heroe.alter}</h3>
        <p><b>Деятельность:</b> ${heroe.activity}</p>
        <p><b>Друзья:</b> ${heroe.friends}</p>
        <p><b>Суперсила:</b> ${heroe.superpower}</p>
        </div>`;
    }

    document.querySelector("#heroesHere").innerHTML = heroesContent;
})



document.addEventListener("change", function (event) {
    const batmanRated = document.querySelector("#rateBatman").value;
    const supermanRated = document.querySelector("#rateSuperman").value;
    const ironmanRated = document.querySelector("#rateIronman").value;

localStorage.setItem('batmanRated', batmanRated);
localStorage.setItem('supermanRated', supermanRated);
localStorage.setItem('ironmanRated', ironmanRated);
});