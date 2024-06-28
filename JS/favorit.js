// سنقوم بإضافة بعض العناصر الافتراضية كمثال
document.addEventListener("DOMContentLoaded", function () {
  const favoriteList = document.getElementById("favorite-list");

  // قم بإضافة العناصر المفضلة هنا
  const favoriteItems = [
    { name: "Favorite Item 1", stars: 4, count: 10 },
    { name: "Favorite Item 2", stars: 5, count: 15 },
    { name: "Favorite Item 3", stars: 3, count: 8 },
    { name: "Favorite Item 4", stars: 4, count: 12 },
    { name: "Favorite Item 5", stars: 5, count: 20 },
  ];

  favoriteItems.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${item.name}</span>
        <div>
          <i class="fas fa-star"></i> ${item.stars}
          <i class="fas fa-heart"></i> ${item.count}
        </div>
      `;
    favoriteList.appendChild(li);
  });
});
