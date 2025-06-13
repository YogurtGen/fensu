// ---------------- IQ Curtain Logic ----------------
window.addEventListener('DOMContentLoaded', () => {
  const curtain = document.getElementById('curtain');
  const iqScreen = document.getElementById('iq-screen');

  if (curtain && iqScreen) {
    setTimeout(() => {
      let steps = [
        'Mengakses jaringan otak...',
        'Menstimulasi neuron virtual...',
        'Membandingkan hasil dengan kecoa...',
        'Menyesuaikan standar nasional IQ Indonesia...',
        'Kalkulasi hampir selesai...'
      ];

      let index = 0;
      let interval = setInterval(() => {
        if (index < steps.length) {
          iqScreen.textContent = steps[index];
          iqScreen.style.opacity = 0.7;
          iqScreen.style.transition = 'opacity 0.5s ease';
          setTimeout(() => { iqScreen.style.opacity = 1; }, 100);
          index++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            iqScreen.textContent = 'Membuka hasil...';
            setTimeout(() => {
              let iq = Math.floor(Math.random() * 40) + 59; // 59-98
              iqScreen.innerHTML = `<div class='iq-reveal'>IQ kamu adalah ${iq}... kayaknya.</div>`;
            }, 2000);
          }, 2000);
        }
      }, 1800);
    }, 3000);

    setTimeout(() => {
      document.body.classList.remove('overflow-hidden');
    }, 21000);
  }

  const easter = document.getElementById('easter-egg');
  if (easter) {
    easter.addEventListener('click', () => {
      alert('Selamat! Kamu baru buang waktu 3 detik cuma buat ini.');
    });
  }

  const quizBtn = document.getElementById('start-quiz');
  if (quizBtn) {
    quizBtn.addEventListener('click', () => {
      const container = document.getElementById('quiz-container');
      showQuestion(container);
    });
  }

  const minigameBtn = document.getElementById('start-minigame');
  if (minigameBtn) {
    minigameBtn.addEventListener('click', () => {
      currentMini = 0;
      showMinigame();
    });
  }
});

// ---------------- Quiz Kepribadian Ngawur ----------------
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

// ---------------- Mini Game Psikologi ----------------
const minigameData = [
  {
    question: "Kalau chat lo gak dibales 3 hari, lo bakal...",
    options: [
      { text: "Bikin skenario aneh di kepala sendiri", funfact: "Otak kita seneng bikin asumsi liar. Padahal sering salah. (Journal of Cognitive Neuroscience, 2018)", sarkas: "Terlalu kreatif buat jadi orang biasa." },
      { text: "Ngapus chat biar keliatan cuek", funfact: "Itu namanya denial. Gaya klasik biar gak keliatan peduli. (Freud, Defense Mechanisms Theory)", sarkas: "Chat ilang, harga diri juga ikut." },
      { text: "Story sindiran biar dia liat", funfact: "Ngode lewat story itu ekspresi. Tapi kadang malah makin absurd. (Journal of Social Psychology, 2020)", sarkas: "Target belum tentu liat. Tapi effort lo maksimal." },
      { text: "Ya udah sih", funfact: "Menerima kadang karena ikhlas, kadang karena capek. (Acceptance and Commitment Therapy - Hayes, 2006)", sarkas: "Damai... atau udah nyerah total?" },
      { text: "B aja, bodo amat juga", funfact: "Beberapa orang emang punya reaksi emosi yang datar. (American Psychological Association, 2021)", sarkas: "Cool banget... sampe dingin kayak kulkas." }
    ]
  },
  {
    question: "Kalau diajak 'healing', lo bakal...",
    options: [
      { text: "Nginap di rumah temen buat ganti suasana", funfact: "Ngobrol receh bareng temen bisa nurunin stres. (Journal of Health Psychology, 2015)", sarkas: "Budget pas-pasan, curhat tak terbatas." },
      { text: "Nonton konser lagu galau", funfact: "Musik galau bisa bantu proses emosi. (Music and Emotion, Juslin & Sloboda, 2010)", sarkas: "Lagu sakit, hati ikut repeat." },
      { text: "Main ke alam biar tenang", funfact: "Alam bisa nurunin hormon stres kortisol. (Frontiers in Psychology, 2019)", sarkas: "Heningnya dapet. Jawaban hidup? Masih nyari." },
      { text: "Ngikut aja deh, yang penting keluar rumah", funfact: "Pasrah kadang karena lelah mikir, bukan ikhlas. (Burnout Recovery Study, 2021)", sarkas: "Ikut angin, sambil pura-pura punya arah." },
      { text: "Ngurung diri di kamar, nonton series", funfact: "Solitude bantu self-awareness. (Journal of Personality, 2003)", sarkas: "Healing versi rebahan abadi." }
    ]
  },
  {
    question: "Kalau lagi bete berat, lo biasanya...",
    options: [
      { text: "Cuci piring sambil misuh-misuh", funfact: "Aktivitas ringan bantu redain stres. (Mindfulness and Chores Study, Florida State University, 2015)", sarkas: "Produktif sambil nyumpah. Multitasking level dewa." },
      { text: "Nyolot ke temen yang bercanda", funfact: "Iritabilitas = tanda kelelahan mental. (Mental Fatigue Study, APA, 2019)", sarkas: "Yang kena malah orang gak bersalah." },
      { text: "Bingung sendiri, diem doang", funfact: "Kebingungan itu valid. (Emotion Regulation Journal, 2020)", sarkas: "Lo diem, tapi dalemnya konser metal." },
      { text: "Liat-liat barang lucu online tapi gak beli", funfact: "Visual distraction bantu relaksasi. (Journal of Cognitive Therapy, 2016)", sarkas: "Keranjang penuh, dompet sepi." },
      { text: "Scroll YouTube sendirian sampe mood balik", funfact: "Solitary leisure bantu mood recovery. (Leisure Studies, 2009)", sarkas: "Cari tawa sambil ngubur stres." }
    ]
  },
  {
    question: "Kalau ketemu versi lo 5 tahun lalu...",
    options: [
      { text: "Ngibrit pura-pura gak kenal", funfact: "Masa lalu bisa jadi sumber rasa malu. (Journal of Self and Identity, 2017)", sarkas: "Lo malu sama diri sendiri. Valid sih." },
      { text: "Kasih daftar orang yang harus dihindarin", funfact: "Antisipasi konflik = mekanisme perlindungan. (Interpersonal Behavior Research, 2014)", sarkas: "Ngasih cheat code, tapi tetep kalah di level 1." },
      { text: "Diem sambil liatin dia dari jauh", funfact: "Refleksi dalam kadang muncul diam-diam. (Journal of Consciousness Studies, 2011)", sarkas: "Stalking lintas waktu. Estetik tapi serem." },
      { text: "Minta maaf karena semua rencana gagal", funfact: "Self-compassion bantu healing. (Compassion Research, Neff, 2003)", sarkas: "Gagal semua, tapi lo masih aktif. Hebat." },
      { text: "Ngomong singkat terus kabur", funfact: "Brief affirmation berdampak besar. (Clinical Psychological Science, 2018)", sarkas: "Misterius. Kayak karakter anime yang muncul 3 detik." }
    ]
  },
  {
    question: "Pas bangun pagi, yang lo rasain...",
    options: [
      { text: "'Yah, hidup lagi'", funfact: "Morning dread = gejala tekanan mental. (Healthline Mental Health, 2022)", sarkas: "Bukan bangun. Lebih ke respawn tanpa niat." },
      { text: "Langsung cek HP, scroll berita buruk", funfact: "Screen time pagi-pagi naikkan stres. (Harvard Business Review, 2020)", sarkas: "Bangun-bangun disambut tagihan dan notifikasi toxic." },
      { text: "Tiduran lagi sampe siang", funfact: "Avoidance bisa jadi coping. (Psychology Today, 2021)", sarkas: "Strategi ninja: ngilang dari kenyataan." },
      { text: "Ngomel dalam hati soal hidup yang gitu-gitu aja", funfact: "Internal monolog bisa jadi refleksi negatif. (Cognitive Therapy Research, 2015)", sarkas: "Sarkas internal mode: ON." },
      { text: "Tatapan kosong ke langit-langit", funfact: "Kontemplasi pagi bantu atur emosi. (Harvard Medical School, 2013)", sarkas: "Estetik, tapi kayak adegan pembuka film sedih." }
    ]
  },
  {
    question: "Kalau gagal total, lo biasanya...",
    options: [
      { text: "Scroll sampe jempol keram", funfact: "Doomscrolling = pelarian cepat. (APA, 2022)", sarkas: "Scroll terus, padahal masalahnya diem di situ." },
      { text: "Curhat ke temen yang selalu positif", funfact: "Social support penting buat mental recovery. (Journal of Affective Disorders, 2010)", sarkas: "Curhat sih... tapi jawabannya kadang klise." },
      { text: "Bikin postingan bijak padahal lagi hancur", funfact: "Quote therapy bisa bantu ekspresi emosi. (Narrative Identity Theory, 2014)", sarkas: "Timeline bijak, hati bolong." },
      { text: "Ngemil tanpa mikir", funfact: "Emotional eating = respon stres. (Eating Behaviors Journal, 2012)", sarkas: "Makan kenyang, beban tetap nangkring." },
      { text: "Nonton film yang udah lo hafal", funfact: "Repetition = predictability = rasa aman. (Psychology Today, 2020)", sarkas: "Plot-nya aman. Hidup lo? Plot twist terus." }
    ]
  },
  {
    question: "Kalau dikejar deadline...",
    options: [
      { text: "Masih santai, tapi panik dalem hati", funfact: "Adrenalin bisa bantu fokus jangka pendek. (Journal of Stress Research, 2019)", sarkas: "Kalem di luar, chaos di dalam." },
      { text: "Ngopi biar melek sampe overthinking", funfact: "Kafein = fokus + cemas kalau kebanyakan. (NIH, 2021)", sarkas: "Deg-degan karena kopi, bukan cinta." },
      { text: "Pasrah, semoga keajaiban datang", funfact: "Learned helplessness muncul kalau sering gagal. (Seligman, 1972)", sarkas: "Ritual: submit dengan doa dan air mata." },
      { text: "Tulis to-do list cantik biar niat", funfact: "Planning visual bantu fokus. (Bullet Journal Study, 2020)", sarkas: "List-nya keren, isinya nol." },
      { text: "Diem, kerja sambil denger musik pelan", funfact: "Flow state muncul saat fokus tinggi. (Csikszentmihalyi, 1990)", sarkas: "Lo serius... tapi suasananya kayak scene hacking di film." }
    ]
  }
];


  // Tambahin pertanyaan lain di format yang sama kalau mau lebih dari 10 lagi

let currentMini = 0;

function showMinigame() {
  const container = document.getElementById('minigame-container');
  const data = minigameData[currentMini];
  container.innerHTML = `<p>${data.question}</p><div>
    ${data.options.map((opt, i) => `<button onclick="selectMini(${i})">${opt.text}</button>`).join('')}
  </div>`;
}

window.selectMini = function(index) {
  const data = minigameData[currentMini];
  const container = document.getElementById('minigame-container');
  const chosen = data.options[index];
  container.innerHTML = `
    <p>${data.question}</p>
    <blockquote>${chosen.funfact}</blockquote>
    <blockquote><strong>${chosen.sarkas}</strong></blockquote>
    <button onclick="nextMini()">Lanjut</button>
  `;
};

window.nextMini = function() {
  currentMini++;
  if (currentMini < minigameData.length) {
    showMinigame();
  } else {
    const container = document.getElementById('minigame-container');
    container.innerHTML = `
      <p>Mini game selesai. Semoga lo merasa makin kompleks sebagai manusia.</p>
      <button onclick="restartMiniGame()">Ulangi Permainan</button>
    `;
  }
};

window.restartMiniGame = function () {
  currentMini = 0;
  showMinigame();
};
