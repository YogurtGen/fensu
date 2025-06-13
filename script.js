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
    question: "Kalau lo gak dibales 3 hari, reaksi lo...",
    options: [
      { text: "Bikin skenario di kepala sendiri", funfact: "Otak kita punya hobi: asumsi. Sayangnya, seringnya salah.", sarkas: "Terlalu kreatif buat jadi orang biasa." },
      { text: "Ngapus chat biar kelihatan gak butuh", funfact: "Itu disebut defense mechanism: denial 2.0.", sarkas: "Chat ilang, harga diri juga ikut." },
      { text: "Ngirim story pasif-agresif", funfact: "Expressive coping bisa sehat... kecuali isinya sindiran semua.", sarkas: "Sarkas story detected. Target belum tentu baca." },
      { text: "Ya udah sih", funfact: "Acceptance bisa muncul dari lelah atau bener-bener ikhlas.", sarkas: "Damai... atau udah putus harapan?" },
      { text: "Biasa aja, ga penting juga", funfact: "Studi di APA menyebutkan beberapa orang secara alami low reactivity terhadap social rejection.", sarkas: "Cool-nya kayak lemari es. Tapi dalemnya kosong." }
    ]
  },
  {
    question: "Kalau diajak healing, lo bakal pilih...",
    options: [
      { text: "Staycation di rumah temen", funfact: "Healing gak selalu mahal. Tapi efeknya? Ya gitu doang.", sarkas: "Budget pas-pasan, harapan selangit." },
      { text: "Nonton konser band yang nyakitin hati", funfact: "Musik bisa proses emosi. Atau nambah luka.", sarkas: "Move on? Enggak. Replay? Banget." },
      { text: "Pergi ke alam biar ngerasa kecil", funfact: "Nature exposure bantu stres, menurut studi di Frontiers in Psychology.", sarkas: "Kecil? Iya. Relevan? Masih nggak." },
      { text: "Terserah deh, ngikut aja", funfact: "Passive preference bisa tanda kelelahan.", sarkas: "Ikut aja biar gak repot mikir. Aman... tapi kosong." },
      { text: "Mending di kamar aja, tenang dan sepi", funfact: "Menurut Jurnal of Personality, solitude bisa meningkatkan self-awareness pada introvert.", sarkas: "Healing versi mode pesawat. Ga terjangkau sinyal maupun emosi." }
    ]
  },
  {
    question: "Lagi suntuk banget, lo biasanya...",
    options: [
      { text: "Nyuci piring sambil nyumpahin hidup", funfact: "Aktivitas fisik ringan bantu redakan stres.", sarkas: "Multitasking antara bersih dan misuh." },
      { text: "Ngegas temen yang niat bercanda", funfact: "Iritabilitas = tanda kelelahan mental.", sarkas: "Maaf ya... tapi lo emang lagi nyebelin." },
      { text: "Ga tau juga sih", funfact: "Confusion = valid emotional state. Jangan disepelein.", sarkas: "Jalan hidup: random dan nggak jelas. Cocok." },
      { text: "Scroll Shopee tanpa niat beli", funfact: "Distraksi visual bisa bantu tenangkan sistem saraf.", sarkas: "Wishlist banyak, hidup tetap kosong." },
      { text: "Nonton YouTube sendirian sambil diem", funfact: "Solitary leisure bisa bantu otak relax tanpa overstimulus, menurut Jurnal Leisure Studies.", sarkas: "Kontennya random. Mood-nya... stabil dikit lah." }
    ]
  },
  {
    question: "Kalau lo ketemu diri lo 5 tahun lalu...",
    options: [
      { text: "Pura-pura gak kenal", funfact: "Facing your past itu berat. Kadang denial itu nyaman.", sarkas: "Malu sama diri sendiri. Lucu juga." },
      { text: "Ngasih daftar orang yang harus dihindarin", funfact: "Preventive action itu bagian dari coping juga.", sarkas: "Pake cheat sheet, tetep boncos." },
      { text: "Diam-diam liatin aja", funfact: "Observation tanpa reaksi bisa jadi refleksi dalam.", sarkas: "Stalking versi lintas waktu." },
      { text: "Minta maaf karena semua gagal tercapai", funfact: "Self-compassion penting. Lo masih hidup, itu udah keren.", sarkas: "Gagal janji sama diri sendiri. Nanggung banget." },
      { text: "Ngomong 'lu bakal baik-baik aja', terus cabut", funfact: "Brief affirmation bisa berdampak signifikan pada coping, menurut Clinical Psych Science.", sarkas: "Misterius tapi suportif. Anime banget." }
    ]
  },
  {
    question: "Lo bangun pagi, hal pertama yang lo sadari...",
    options: [
      { text: "'Anjir... hidup lagi'", funfact: "Morning dread sering muncul dari stres internal.", sarkas: "Bukan alarm. Yang bikin bangun: rasa hampa." },
      { text: "Langsung ngecek hp sambil ngeluh", funfact: "Early screen exposure bisa ganggu mood harian.", sarkas: "Pagi: dikasih berita buruk dan notifikasi pinjaman." },
      { text: "Cuekin aja sampe siang", funfact: "Delayed response bisa jadi bentuk passive coping.", sarkas: "Snooze mental sampai realita maksa bangun." },
      { text: "Ngomel ke diri sendiri di dalam hati", funfact: "Inner critic aktif sejak fajar = mental burnout.", sarkas: "Monolog pagi yang nggak bikin semangat." },
      { text: "Diem sambil ngeliatin langit-langit kamar", funfact: "Quiet contemplation pagi hari bantu regulasi emosi, menurut Harvard Medical School.", sarkas: "Estetik tapi nganggur. Mood: film festival low budget." }
    ]
  },
  {
    question: "Kalau gagal total, biasanya lo...",
    options: [
      { text: "Scroll sampe jempol kesemutan", funfact: "Doomscrolling: pelarian instan dari rasa gagal.", sarkas: "Lo nggak gagal. Lo cuma loading... selamanya." },
      { text: "Nge-chat temen yang selalu positif", funfact: "Support system penting banget buat bounce back.", sarkas: "Lo nyari sunshine biar bisa nyebur lagi." },
      { text: "Bikin postingan bijak padahal sedih banget", funfact: "Wisdom quotes bisa jadi bentuk sublimasi.", sarkas: "Nasehat buat orang lain. Diri sendiri? Zonk." },
      { text: "Diam dan nyari cemilan", funfact: "Makan sebagai emotional regulation kadang bekerja, kadang nambah drama.", sarkas: "Makan kenyang, masalah tetap eksis." },
      { text: "Nonton ulang film yang udah 10x ditonton", funfact: "Repetition comfort = bentuk emotional predictability, menurut Psychology Today.", sarkas: "Plot-nya hafal. Hidup lo? Masih bingung." }
    ]
  },
  {
    question: "Waktu deadline mepet, lo...",
    options: [
      { text: "Ngaret tapi panik dalam hati", funfact: "Panik bikin fokus naik... tapi cuma bentar.", sarkas: "Ritual suci kaum prokrastinasi." },
      { text: "Minum kopi sampe jantung deg-degan", funfact: "Kafein = stimulan. Produktif, atau tremor?", sarkas: "Energi palsu demi hasil... samar." },
      { text: "Pasrah aja, nanti juga selesai sendiri", funfact: "Surrender kadang muncul bukan karena ikhlas, tapi capek.", sarkas: "Produktivitas by keajaiban." },
      { text: "Bikin to-do list yang estetik", funfact: "Organizing = coping, tapi eksekusi tetap penting.", sarkas: "List cakep. Kerjaan? Nihil." },
      { text: "Kerjain sendiri, diem, sambil denger lagu instrumental", funfact: "Focused flow dalam kesunyian bisa naikkan produktivitas, menurut jurnal Flow Theory by Csikszentmihalyi.", sarkas: "Lo serius... tapi soundtrack-nya kayak film hacker." }
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
