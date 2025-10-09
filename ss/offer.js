// === Edit your offers here daily ===
const todayOffers = [
  "₹129 Chicken Biryani + Thums Up Combo 🍗🥤",
  "₹149 Paneer Biryani + Butter Naan 🍛",
  "₹99 Veg Fried Rice + Sweet Lassi 🥗🍶",
  "₹179 Chicken 65 + Egg Fried Rice 🍗🍳",
  "₹199 Family Combo (2 Biryani + 2 Drinks) 🍽️🥤"
];

// === Script to display offers ===
document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("specialOffers");
  if (list) {
    list.innerHTML = todayOffers
      .map(offer => `<li>${offer}</li>`)
      .join("");
  }
});
