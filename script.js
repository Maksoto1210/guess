const students = [
  { name: "Ани", baby: "https://i.imgur.com/NAo1PIA.jpeg", current: "https://i.imgur.com/QzTO50u.jpeg" },
  { name: "Беа", baby: "https://i.imgur.com/2CG3dzj.jpeg", current: "https://i.imgur.com/YrfroUz.jpeg" },
  { name: "Вели", baby: "https://imgur.com/hbtWUtK.jpeg", current: "https://imgur.com/8IeExDw.jpeg" },
  { name: "Вив", baby: "https://imgur.com/nODXsE6.jpeg", current: "https://imgur.com/FLkIIBy.jpeg" },
  { name: "Вики А.", baby: "https://imgur.com/n25zHPF.jpeg", current: "https://imgur.com/CMBKGRV.jpeg" },
  { name: "Вики С.", baby: "https://imgur.com/VTi6bIp.jpeg", current: "https://imgur.com/46HC5GB.jpeg" },
  { name: "Дани", baby: "https://imgur.com/GVRNB7G.jpeg", current: "https://imgur.com/oM7ebRN.jpeg" },
  { name: "Джъстин", baby: "https://imgur.com/2Hy0P0m.jpeg", current: "https://imgur.com/Pg2Lolk.jpeg" },
  { name: "Елеонора", baby: "https://imgur.com/DL5JwVp.jpeg", current: "https://imgur.com/IPbNjrj.jpeg" },
  { name: "Елинор", baby: "https://imgur.com/xBOO8fK.jpeg", current: "https://imgur.com/sJFNEDN.jpeg" },
  { name: "Иван Д.", baby: "https://imgur.com/rImNZva.jpeg", current: "https://imgur.com/vdoebH6.jpeg" },
  { name: "Иван К.", baby: "https://imgur.com/VXXHilh.jpeg", current: "https://imgur.com/PIWxuNh.jpeg" },
  { name: "Или Б.", baby: "https://imgur.com/ELP07vw.jpeg", current: "https://imgur.com/nC8woKj.jpeg" },
  { name: "Или П.", baby: "https://imgur.com/yave0oz.jpeg", current: "https://imgur.com/uTMeGzE.jpeg" },
  { name: "Кати", baby: "https://i.imgur.com/1Mb9u0m.jpeg", current: "https://imgur.com/dIfObLA.jpeg" },
  { name: "Крис", baby: "https://imgur.com/Zb21dn5.jpeg", current: "https://imgur.com/Pp8h4ob.jpeg" },
  { name: "Марти", baby: "https://imgur.com/LTqx9Jn.jpeg", current: "https://imgur.com/sjhyXwW.jpeg" },
  { name: "Симо", baby: "https://imgur.com/3DgTERi.jpeg", current: "https://imgur.com/TsZJKxF.jpeg" },
  { name: "Тея", baby: "https://imgur.com/h95jN4g.jpeg", current: "https://imgur.com/Z1Qnq7W.jpeg" },
  { name: "Тошко", baby: "https://imgur.com/7DiauqZ.jpeg", current: "https://imgur.com/wQ0bJF6.jpeg" },
  { name: "Елена", baby: "https://imgur.com/X77NNwN.jpeg", current: "https://imgur.com/3CTSUbd.jpeg" },
  { name: "Жиката", baby: "https://imgur.com/w03GtBy.jpeg", current: "https://imgur.com/jrTB0Kh.jpeg" },
  { name: "Криси", baby: "https://imgur.com/jHIyKUy.jpeg", current: "https://imgur.com/BfqJC42.jpeg" },
  { name: "Ема", baby: "https://i.imgur.com/liWWEob.jpeg", current: "https://imgur.com/LVqLWqS.jpeg" },
  { name: "Макс", baby: "https://imgur.com/xZ9mCHl.jpeg", current: "https://imgur.com/skrZpfY.jpeg" },
  { name: "Мария", baby: "https://imgur.com/W91WmmH.jpeg", current: "https://imgur.com/HHYK3pK.jpeg" },
    { name: "Крумчо и Данчо", baby: "https://i.imgur.com/TD7TAgH.jpeg", current: "https://i.imgur.com/i8I3bBb.jpeg" },

  
];

const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const startBtn = document.getElementById("start-btn");

const babyImage = document.getElementById("baby-image");
const currentImage = document.getElementById("current-image");
const studentCounter = document.getElementById("student-counter");
const studentName = document.getElementById("student-name");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const showBtn = document.getElementById("show-btn");

let currentIndex = 0;
let isRevealed = false;

// Разбърква реда на учениците
students.sort(() => Math.random() - 0.5);

function loadStudent(index) {
  const student = students[index];

  babyImage.src = student.baby;
  babyImage.alt = `${student.name}`;

  currentImage.src = student.current;
  currentImage.alt = `${student.name} `;

  studentCounter.textContent = `${index + 1} / ${students.length}`;
  studentName.textContent = "???";
  showBtn.textContent = "Show";

  currentImage.classList.add("blurred");
  isRevealed = false;
}

function toggleReveal() {
  if (isRevealed) {
    currentImage.classList.add("blurred");
    studentName.textContent = "???";
    showBtn.textContent = "Show";
    isRevealed = false;
  } else {
    currentImage.classList.remove("blurred");
    studentName.textContent = students[currentIndex].name;
    showBtn.textContent = "Hide";
    isRevealed = true;
  }
}

function nextStudent() {
  currentIndex = (currentIndex + 1) % students.length;
  loadStudent(currentIndex);
}

function prevStudent() {
  currentIndex = (currentIndex - 1 + students.length) % students.length;
  loadStudent(currentIndex);
}

startBtn.addEventListener("click", () => {
  startScreen.classList.remove("active");
  gameScreen.classList.add("active");
  loadStudent(currentIndex);
});

showBtn.addEventListener("click", toggleReveal);
nextBtn.addEventListener("click", nextStudent);
prevBtn.addEventListener("click", prevStudent);

// Управление с клавиатура
document.addEventListener("keydown", (event) => {
  if (!gameScreen.classList.contains("active")) return;

  if (event.key === "ArrowRight") nextStudent();
  if (event.key === "ArrowLeft") prevStudent();
  if (event.key === " " || event.key === "Enter") {
    event.preventDefault();
    toggleReveal();
  }
});