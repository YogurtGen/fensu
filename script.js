const quizData = [
  {
    question: "Kalau lo jadi hewan, lo lebih cocok jadi...",
    options: ["Capybara introvert", "Burung hantu overthinking", "Gorila yang chill", "Kucing yang dendam sama dunia"]
  },
  {
    question: "Lo minum kopi karena...",
    options: ["Biar keliatan sibuk", "Emang suka rasa pahitnya hidup", "Ngikut tren", "Supaya alasan begadang lo valid"]
  },
  {
    question: "Kalau ada masalah, reaksi pertama lo?",
    options: ["Scroll TikTok 3 jam", "Nulis puisi sedih", "Menyalahkan zodiak", "Ngilang"]
  }
];

const results = [
  "🌀 Si Absurd Penuh Makna — Pikirannya lompat-lompat, tapi kadang ngena.",
  "🔥 Tukang Overthinking Produktif — Bisa nangis sambil bikin presentasi.",
  "🌚 Sok Kuat Tapi Rapuh — Luarnya sarkas, dalamnya nugget ayam.",
  "🍃 The Filosof Receh — Ngelawak sambil ngajak mikir eksistensi.",
  "☕ Si Chill Tapi Gak Stabil — Mood lo ditentukan suhu AC."
];

let currentQuestion = 0;
let quizAnswers = [];

document.getElementById('start-quiz').addEventListener('click', () => {
  const container = document.getElementById('quiz-container');
  showQuestion(container);
});

function showQuestion(container) {
  const q = quizData[currentQuestion];
  container.innerHTML = `
    <p>${q.question}</p>
    <div>
      ${q.options.map((opt, i) => `<button onclick="selectAnswer('${opt}')">${opt}</button>`).join("")}
    </div>
  `;
}

window.selectAnswer = function(opt) {
  quizAnswers.push(opt);
  currentQuestion++;
  const container = document.getElementById('quiz-container');
  if (currentQuestion < quizData.length) {
    showQuestion(container);
  } else {
    const result = results[Math.floor(Math.random() * results.length)];
    container.innerHTML = `<p>Hasil Tes Kamu:</p><blockquote>${result}</blockquote>`;
  }
};
