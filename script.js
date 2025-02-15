const $toggleButton = document.querySelector("#toggle");
const $body = document.querySelector("body");
const $skillNodeList = document.querySelectorAll(".skill");
const $navElement = document.querySelector(".nav");

$toggleButton.addEventListener("click", () => {
  handleToggleModes();
});

function handleToggleModes() {
  $body.classList.toggle("dark");
}

const colors = [
  "#EF4444", // red-500
  "#F87171", // red-400
  "#FCA5A5", // red-300
  "#FECACA", // red-200
  "#FEE2E2", // red-100
  "#10B981", // green-500
  "#34D399", // green-400
  "#6EE7B7", // green-300
  "#A7F3D0", // green-200
  "#D1FAE5", // green-100
  "#3B82F6", // blue-500
  "#60A5FA", // blue-400
  "#93C5FD", // blue-300
  "#BFDBFE", // blue-200
  "#DBEAFE", // blue-100
  "#F59E0B", // yellow-500
  "#FBBF24", // yellow-400
  "#FCD34D", // yellow-300
  "#FDE68A", // yellow-200
  "#FEF3C7", // yellow-100
];

// console.log($skillNodeList);
// $skillNodeList.forEach(($note) => {
//   $note.style.backgroundColor =
//     colors[Math.floor(Math.random() * colors.length)];
// });

// setTimeout(() => {
//   $navElement.style.borderColor = "red";
// }, 200);
// setTimeout(() => {
//   $navElement.style.borderColor = "red";
// });
