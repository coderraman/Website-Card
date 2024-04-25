function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  // Finish this function
  let viewsstr;
  if (views <= 1000) {
    viewsstr = views;
  } else if (views >= 1000000) {
    viewsstr = views/1000000 + "m"
  } else {
    viewsstr = views / 1000 + "k";
  }
  let html = `<div class="card">
    <div class="image">
      <img src="${thumbnail}" alt="" />
      <div class="dura">${duration}</div>
    </div>
    <div class="text">
      <h1>${title}</h1>
      <p>${cName}. ${viewsstr} views. ${monthsOld} months ago</p>
    </div>
  </div>`;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
}

createCard(
  "Introduction to Backend | Sigma Web Dev video #1",
  "CodeWithHarry",
  50000000,
  7,
  "31:22",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);
createCard(
  "Introduction to Async and await function | Sigma Web Dev video #3",
  "CodeWithHarry",
  5000,
  2,
  "31:22",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);
createCard(
  "Introduction to callback promises function | Sigma Web Dev video #3",
  "CodeWithHarry",
  120000,
  4,
  "30:22",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);
