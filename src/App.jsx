
import { useState } from "react";
import "./App.css";
import MusicPlayer from "./components/MusicPlayer";
const materi = [
  {
    id: "jangkauan",
    nomor: "01",
    nama: "Jangkauan",
    subtitle: "Range",
    icon: "📏",
    warna: "blue",
    deskripsi: "Memahami selisih antara nilai terbesar dan nilai terkecil.",
    rumus: "R = X maks − X min",
    contoh: "Data: 4, 6, 7, 8, 10",
    langkah: [
      "Tentukan nilai terbesar, yaitu 10.",
      "Tentukan nilai terkecil, yaitu 4.",
      "Kurangkan nilai terbesar dengan nilai terkecil.",
      "Jangkauan = 10 − 4 = 6."
    ],
    hasil: "Jadi, jangkauan data adalah 6."
  },
  {
    id: "median",
    nomor: "02",
    nama: "Median",
    subtitle: "Nilai Tengah",
    icon: "🎯",
    warna: "purple",
    deskripsi: "Menentukan nilai tengah dari sekumpulan data yang telah diurutkan.",
    rumus: "Me = nilai tengah",
    contoh: "Data: 3, 5, 7, 9, 11",
    langkah: [
      "Urutkan data dari terkecil ke terbesar.",
      "Hitung banyaknya data, yaitu 5.",
      "Karena jumlah data ganjil, ambil nilai yang tepat di tengah.",
      "Nilai tengahnya adalah 7."
    ],
    hasil: "Jadi, median data adalah 7."
  },
  {
    id: "kuartil",
    nomor: "03",
    nama: "Kuartil",
    subtitle: "Quartile",
    icon: "📊",
    warna: "orange",
    deskripsi: "Membagi data terurut menjadi empat bagian.",
    rumus: "Q₁, Q₂, dan Q₃",
    contoh: "Data: 2, 4, 6, 8, 10, 12, 14",
    langkah: [
      "Urutkan data dari terkecil ke terbesar.",
      "Tentukan median sebagai Q₂, yaitu 8.",
      "Ambil median bagian bawah untuk mendapatkan Q₁, yaitu 4.",
      "Ambil median bagian atas untuk mendapatkan Q₃, yaitu 12."
    ],
    hasil: "Jadi, Q₁ = 4, Q₂ = 8, dan Q₃ = 12."
  },
  {
    id: "iqr",
    nomor: "04",
    nama: "Jangkauan Interkuartil",
    subtitle: "Interquartile Range",
    icon: "📈",
    warna: "green",
    deskripsi: "Menentukan selisih antara kuartil ketiga dan kuartil pertama.",
    rumus: "IQR = Q₃ − Q₁",
    contoh: "Diketahui Q₁ = 4 dan Q₃ = 12",
    langkah: [
      "Tentukan nilai kuartil pertama (Q₁).",
      "Tentukan nilai kuartil ketiga (Q₃).",
      "Kurangkan Q₃ dengan Q₁.",
      "IQR = 12 − 4 = 8."
    ],
    hasil: "Jadi, jangkauan interkuartil adalah 8."
  }
];

const soalKuis = [
  {
    pertanyaan: "Apa yang dimaksud dengan jangkauan data?",
    pilihan: [
      "Jumlah seluruh data",
      "Selisih nilai terbesar dan terkecil",
      "Nilai yang paling sering muncul",
      "Nilai tengah data"
    ],
    jawaban: 1,
    pembahasan: "Jangkauan diperoleh dari nilai terbesar dikurangi nilai terkecil."
  },
  {
    pertanyaan: "Tentukan median dari data 2, 4, 6, 8, 10.",
    pilihan: ["4", "5", "6", "8"],
    jawaban: 2,
    pembahasan: "Nilai yang berada tepat di tengah adalah 6."
  },
  {
    pertanyaan: "Apa simbol yang digunakan untuk kuartil pertama?",
    pilihan: ["Q₁", "Q₂", "Q₃", "IQR"],
    jawaban: 0,
    pembahasan: "Kuartil pertama dilambangkan dengan Q₁."
  },
  {
    pertanyaan: "Jika Q₁ = 5 dan Q₃ = 15, berapakah IQR?",
    pilihan: ["5", "10", "15", "20"],
    jawaban: 1,
    pembahasan: "IQR = Q₃ − Q₁ = 15 − 5 = 10."
  }
];

function Mascot({ compact = false }) {
  return (
    <div className={`mascot-scene ${compact ? "mascot-compact" : ""}`}>
      <div className="mascot-glow"></div>

      <div className="mascot-shadow"></div>

      <div className="mascot">
        <div className="mascot-ear left"></div>
        <div className="mascot-ear right"></div>

        <div className="mascot-body">
          <div className="mascot-face">
            <div className="mascot-eyes">
              <span></span>
              <span></span>
            </div>
            <div className="mascot-cheeks">
              <span></span>
              <span></span>
            </div>
            <div className="mascot-mouth"></div>
          </div>

          <div className="mascot-belly"></div>

          <div className="mascot-arm left"></div>
          <div className="mascot-arm right"></div>
        </div>

        <div className="mascot-foot left"></div>
        <div className="mascot-foot right"></div>

        <div className="mascot-cap">
          <span></span>
        </div>
      </div>

      <div className="mascot-star star-one">✦</div>
      <div className="mascot-star star-two">✧</div>
      <div className="mascot-star star-three">✦</div>
    </div>
  );
}

function App() {
  const [halaman, setHalaman] = useState("beranda");
  const [materiAktif, setMateriAktif] = useState(materi[0]);
  const [nomorSoal, setNomorSoal] = useState(0);
  const [jawaban, setJawaban] = useState(null);
  const [skor, setSkor] = useState(0);
  const [selesai, setSelesai] = useState(false);
  const [jumlahBenar, setJumlahBenar] = useState(0);
  const [lihatPembahasan, setLihatPembahasan] = useState(false);

  const pilihMateri = (item) => {
    setMateriAktif(item);
    setHalaman("detail");
  };

  const mulaiKuis = () => {
    setNomorSoal(0);
    setJawaban(null);
    setSkor(0);
    setJumlahBenar(0);
    setSelesai(false);
    setLihatPembahasan(false);
    setHalaman("kuis");
  };

  const pilihJawaban = (index) => {
    if (jawaban !== null) return;

    setJawaban(index);

    if (index === soalKuis[nomorSoal].jawaban) {
      setSkor((nilai) => nilai + 25);
      setJumlahBenar((jumlah) => jumlah + 1);
    }
  };

  const soalSelanjutnya = () => {
    if (nomorSoal < soalKuis.length - 1) {
      setNomorSoal((nomor) => nomor + 1);
      setJawaban(null);
      setLihatPembahasan(false);
    } else {
      setSelesai(true);
    }
  };

  const progressKuis = ((nomorSoal + (jawaban !== null ? 1 : 0)) / soalKuis.length) * 100;

  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">✦</div>
          <div>
            <h2>Ruang Data</h2>
            <span>Math Learning Space</span>
          </div>
        </div>

        <div className="sidebar-label">MENU UTAMA</div>

        <nav className="navigation">
          <button
            className={halaman === "beranda" ? "nav-item active" : "nav-item"}
            onClick={() => setHalaman("beranda")}
          >
            <span>⌂</span> Beranda
          </button>

          <button
            className={["materi", "detail"].includes(halaman) ? "nav-item active" : "nav-item"}
            onClick={() => setHalaman("materi")}
          >
            <span>▤</span> Materi Belajar
          </button>

          <button
            className={halaman === "kuis" ? "nav-item active" : "nav-item"}
            onClick={mulaiKuis}
          >
            <span>✎</span> Kuis Interaktif
          </button>
        </nav>

        <div className="sidebar-bottom">
          <Mascot compact />
          <div className="sidebar-message">
            <strong>Semangat belajar!</strong>
            <p>Belajar sedikit demi sedikit, lama-lama menjadi hebat.</p>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <MusicPlayer />

        <header className="topbar">
          <div>
            <div className="breadcrumb">Ruang Data / {halaman}</div>
            <h3>
              {halaman === "beranda" && "Selamat Datang!"}
              {halaman === "materi" && "Materi Pembelajaran"}
              {halaman === "detail" && materiAktif.nama}
              {halaman === "kuis" && "Kuis Interaktif"}
            </h3>
          </div>

          <div className="topbar-profile">
            <div className="profile-avatar">🎓</div>
            <div>
              <strong>Peserta Didik</strong>
              <span>Pelajar Ruang Data</span>
            </div>
          </div>
        </header>

        {halaman === "beranda" && (
          <section className="page-content">
            <div className="hero-card">
              <div className="hero-text">
                <span className="hero-label">✦ TEMPAT BELAJAR MATEMATIKA</span>
                <h1>Belajar Data Jadi Lebih Mudah dan Menyenangkan!</h1>
                <p>
                  Yuk, pahami penyebaran data melalui materi,
                  contoh soal, dan latihan interaktif.
                </p>

                <button className="primary-button" onClick={() => setHalaman("materi")}>
                  Mulai Belajar <span>→</span>
                </button>

                <div className="hero-note">
                  <span>✓</span> Belajar bertahap sesuai kemampuanmu
                </div>
              </div>

              <div className="hero-character">
                <div className="floating-label label-top">Let's Learn! ✨</div>
                <Mascot />
                <div className="floating-label label-bottom">Matematika itu seru!</div>
              </div>
            </div>

            <div className="section-heading">
              <div>
                <span className="eyebrow">JELAJAHI MATERI</span>
                <h2>Apa yang akan kita pelajari?</h2>
              </div>
              <button className="text-button" onClick={() => setHalaman("materi")}>
                Lihat semua →
              </button>
            </div>

            <div className="material-grid">
              {materi.map((item) => (
                <button
                  className={`material-card ${item.warna}`}
                  key={item.id}
                  onClick={() => pilihMateri(item)}
                >
                  <div className="material-card-top">
                    <span className="material-icon">{item.icon}</span>
                    <span className="material-number">{item.nomor}</span>
                  </div>
                  <h3>{item.nama}</h3>
                  <span className="material-subtitle">{item.subtitle}</span>
                  <p>{item.deskripsi}</p>
                  <div className="card-footer">
                    Pelajari materi <span>↗</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="bottom-banner">
              <div>
                <span className="eyebrow">UJI PEMAHAMANMU</span>
                <h2>Sudah siap mencoba kuis?</h2>
                <p>Kerjakan latihan untuk mengetahui pemahamanmu.</p>
                <button className="primary-button" onClick={mulaiKuis}>
                  Mulai Kuis <span>→</span>
                </button>
              </div>
              <div className="banner-illustration">🏆</div>
            </div>
          </section>
        )}

        {halaman === "materi" && (
          <section className="page-content">
            <div className="intro-card">
              <div>
                <span className="eyebrow">PANDUAN BELAJAR</span>
                <h1>Kenali konsep penyebaran data</h1>
                <p>
                  Pilih materi yang ingin dipelajari. Setiap materi
                  dilengkapi rumus, contoh, dan langkah penyelesaian.
                </p>
              </div>
              <div className="intro-icon">📚</div>
            </div>

            <div className="material-grid">
              {materi.map((item) => (
                <button
                  className={`material-card ${item.warna}`}
                  key={item.id}
                  onClick={() => pilihMateri(item)}
                >
                  <div className="material-card-top">
                    <span className="material-icon">{item.icon}</span>
                    <span className="material-number">{item.nomor}</span>
                  </div>
                  <h3>{item.nama}</h3>
                  <span className="material-subtitle">{item.subtitle}</span>
                  <p>{item.deskripsi}</p>
                  <div className="card-footer">
                    Buka materi <span>↗</span>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}

        {halaman === "detail" && (
          <section className="page-content">
            <button className="back-button" onClick={() => setHalaman("materi")}>
              ← Kembali ke materi
            </button>

            <div className={`lesson-header ${materiAktif.warna}`}>
              <div>
                <span className="eyebrow">MATERI {materiAktif.nomor}</span>
                <h1>{materiAktif.nama}</h1>
                <p>{materiAktif.deskripsi}</p>
              </div>
              <div className="lesson-icon">{materiAktif.icon}</div>
            </div>

            <div className="lesson-layout">
              <article className="lesson-main">
                <div className="content-card">
                  <span className="eyebrow">KONSEP UTAMA</span>
                  <h2>Pengertian {materiAktif.nama}</h2>
                  <p>{materiAktif.deskripsi}</p>
                  <div className="formula-box">
                    <span>RUMUS</span>
                    <strong>{materiAktif.rumus}</strong>
                  </div>
                </div>

                <div className="content-card">
                  <span className="eyebrow">CONTOH SOAL</span>
                  <h2>Perhatikan contoh berikut</h2>
                  <div className="example-data">{materiAktif.contoh}</div>
                  <h3>Langkah penyelesaian:</h3>
                  <ol className="step-list">
                    {materiAktif.langkah.map((langkah, index) => (
                      <li key={index}>
                        <span>{index + 1}</span>
                        {langkah}
                      </li>
                    ))}
                  </ol>
                  <div className="answer-box">
                    <span>✓</span> {materiAktif.hasil}
                  </div>
                </div>
              </article>

              <aside className="lesson-side">
                <div className="mentor-card">
                  <Mascot compact />
                  <h3>Hai, teman belajar!</h3>
                  <p>Pelajari langkah demi langkah. Tidak perlu terburu-buru.</p>
                </div>

                <div className="content-card">
                  <h3>Materi lainnya</h3>
                  {materi.filter((item) => item.id !== materiAktif.id).map((item) => (
                    <button
                      className="related-item"
                      key={item.id}
                      onClick={() => setMateriAktif(item)}
                    >
                      <span>{item.icon}</span>
                      {item.nama}
                      <b>→</b>
                    </button>
                  ))}
                </div>

                <button className="primary-button full-button" onClick={mulaiKuis}>
                  Coba Kuis <span>→</span>
                </button>
              </aside>
            </div>
          </section>
        )}

        {halaman === "kuis" && (
          <section className="page-content quiz-page">
            {!selesai ? (
              <>
                <div className="quiz-welcome">
                  <div>
                    <span className="eyebrow">LATIHAN MANDIRI</span>
                    <h1>Uji Pemahamanmu!</h1>
                    <p>Pilih jawaban yang paling tepat. Semangat mengerjakan!</p>
                  </div>
                  <Mascot compact />
                </div>

                <div className="quiz-progress-card">
                  <div className="progress-info">
                    <strong>Progres Kuis</strong>
                    <span>Soal {nomorSoal + 1} dari {soalKuis.length}</span>
                  </div>
                  <div className="progress-track">
                    <div style={{ width: `${progressKuis}%` }}></div>
                  </div>
                </div>

                <div className="quiz-card">
                  <span className="eyebrow">PERTANYAAN {nomorSoal + 1}</span>
                  <h2>{soalKuis[nomorSoal].pertanyaan}</h2>

                  <div className="answer-options">
                    {soalKuis[nomorSoal].pilihan.map((pilihan, index) => {
                      let className = "answer-option";
                      if (jawaban !== null && index === soalKuis[nomorSoal].jawaban) {
                        className += " correct";
                      } else if (jawaban === index) {
                        className += " incorrect";
                      }

                      return (
                        <button
                          key={index}
                          className={className}
                          onClick={() => pilihJawaban(index)}
                          disabled={jawaban !== null}
                        >
                          <span>{String.fromCharCode(65 + index)}</span>
                          {pilihan}
                          {jawaban !== null && index === soalKuis[nomorSoal].jawaban && (
                            <b>✓</b>
                          )}
                          {jawaban === index && jawaban !== soalKuis[nomorSoal].jawaban && (
                            <b>✕</b>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {jawaban !== null && (
                    <div className={jawaban === soalKuis[nomorSoal].jawaban ? "feedback correct-feedback" : "feedback wrong-feedback"}>
                      <strong>
                        {jawaban === soalKuis[nomorSoal].jawaban
                          ? "Hebat! Jawabanmu benar 🎉"
                          : "Belum tepat, yuk pelajari lagi!"}
                      </strong>
                      <p>{soalKuis[nomorSoal].pembahasan}</p>
                    </div>
                  )}

                  {jawaban !== null && (
                    <button className="primary-button full-button" onClick={soalSelanjutnya}>
                      {nomorSoal === soalKuis.length - 1 ? "Lihat Hasil" : "Soal Berikutnya"}
                      <span>→</span>
                    </button>
                  )}
                </div>
              </>
            ) : (
              <div className="result-card">
                <div className="result-trophy">🏆</div>
                <span className="eyebrow">HASIL LATIHANMU</span>
                <h1>Kuis Selesai!</h1>
                <div className="score-circle">
                  <strong>{skor}</strong>
                  <span>Skor</span>
                </div>
                <h2>{jumlahBenar} dari {soalKuis.length} jawaban benar</h2>
                <p>
                  {jumlahBenar === 4
                    ? "Luar biasa! Kamu sudah memahami materi dengan sangat baik."
                    : "Terus berlatih dan pelajari kembali materi yang belum dipahami."}
                </p>
                <button className="primary-button" onClick={mulaiKuis}>
                  Ulangi Kuis ↻
                </button>
                <button className="text-button result-back" onClick={() => setHalaman("beranda")}>
                  Kembali ke Beranda
                </button>
              </div>
            )}
          </section>
        )}

        <footer className="footer">
          <span>✦ Ruang Data</span>
          <span>Belajar matematika dengan cara yang menyenangkan.</span>
        </footer>
      </main>
    </div>
  );
}

export default App;
