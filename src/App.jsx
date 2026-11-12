
import { useState } from "react";
import "./App.css";
import MusicPlayer from "./components/MusicPlayer";

// ==========================================
// DATA MATERI PEMBELAJARAN
// ==========================================

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

// ==========================================
// SOAL PRETEST (5 SOAL)
// ==========================================

const soalPretest = [
  {
    pertanyaan: "Diketahui data nilai: 5, 7, 8, 10, 12. Berapakah jangkauan data tersebut?",
    pilihan: ["5", "6", "7", "8"],
    jawaban: 2,
    pembahasan: "Jangkauan = nilai terbesar − nilai terkecil = 12 − 5 = 7."
  },
  {
    pertanyaan: "Diketahui data terurut: 2, 4, 6, 8, 10, 12, 14. Berapakah Q₁?",
    pilihan: ["2", "4", "6", "8"],
    jawaban: 1,
    pembahasan: "Median bagian bawah dari data 2, 4, 6 adalah 4. Jadi, Q₁ = 4."
  },
  {
    pertanyaan: "Dari data 2, 4, 6, 8, 10, 12, 14, berapakah Q₃?",
    pilihan: ["8", "10", "12", "14"],
    jawaban: 2,
    pembahasan: "Median bagian atas dari data 10, 12, 14 adalah 12. Jadi, Q₃ = 12."
  },
  {
    pertanyaan: "Jika Q₁ = 5 dan Q₃ = 13, berapakah jangkauan interkuartil?",
    pilihan: ["6", "8", "10", "18"],
    jawaban: 1,
    pembahasan: "IQR = Q₃ − Q₁ = 13 − 5 = 8."
  },
  {
    pertanyaan: "Jika jangkauan interkuartil adalah 10, berapakah simpangan kuartilnya?",
    pilihan: ["2", "5", "10", "20"],
    jawaban: 1,
    pembahasan: "Simpangan kuartil (Qd) = IQR ÷ 2 = 10 ÷ 2 = 5."
  }
];

// ==========================================
// SOAL LATIHAN INTERAKTIF
// ==========================================

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

// ==========================================
// SOAL POSTTEST (5 SOAL)
// ==========================================

const soalPosttest = [
  {
    pertanyaan: "Data penjualan buku adalah 6, 9, 11, 14, 16. Berapakah jangkauannya?",
    pilihan: ["8", "9", "10", "12"],
    jawaban: 2,
    pembahasan: "Jangkauan = 16 − 6 = 10."
  },
  {
    pertanyaan: "Diketahui data terurut: 3, 5, 7, 9, 11, 13, 15. Berapakah Q₁?",
    pilihan: ["3", "5", "7", "9"],
    jawaban: 1,
    pembahasan: "Median bagian bawah dari data 3, 5, 7 adalah 5. Jadi, Q₁ = 5."
  },
  {
    pertanyaan: "Dari data 3, 5, 7, 9, 11, 13, 15, berapakah Q₃?",
    pilihan: ["9", "11", "13", "15"],
    jawaban: 2,
    pembahasan: "Median bagian atas dari data 11, 13, 15 adalah 13. Jadi, Q₃ = 13."
  },
  {
    pertanyaan: "Jika Q₁ = 6 dan Q₃ = 18, berapakah IQR?",
    pilihan: ["6", "10", "12", "24"],
    jawaban: 2,
    pembahasan: "IQR = Q₃ − Q₁ = 18 − 6 = 12."
  },
  {
    pertanyaan: "Jika IQR suatu data adalah 8, berapakah simpangan kuartilnya?",
    pilihan: ["2", "4", "6", "8"],
    jawaban: 1,
    pembahasan: "Qd = IQR ÷ 2 = 8 ÷ 2 = 4."
  }
];

// ==========================================
// KARAKTER 3D
// ==========================================

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

// ==========================================
// APLIKASI UTAMA
// ==========================================

function App() {
  const [halaman, setHalaman] = useState("identitas");
  const [namaInput, setNamaInput] = useState("");
  const [namaPeserta, setNamaPeserta] = useState("");

  const [materiAktif, setMateriAktif] = useState(materi[0]);

  const [jenisTes, setJenisTes] = useState("pretest");
  const [nomorSoal, setNomorSoal] = useState(0);
  const [jawaban, setJawaban] = useState(null);
  const [skor, setSkor] = useState(0);
  const [selesai, setSelesai] = useState(false);
  const [jumlahBenar, setJumlahBenar] = useState(0);

  const [hasilTes, setHasilTes] = useState({
    pretest: null,
    posttest: null
  });

  const daftarSoal =
    jenisTes === "pretest"
      ? soalPretest
      : jenisTes === "posttest"
      ? soalPosttest
      : soalKuis;

  const soalSekarang = daftarSoal[nomorSoal];

  // Memulai belajar dengan nama peserta didik
  const mulaiBelajar = (event) => {
    event.preventDefault();

    if (!namaInput.trim()) {
      alert("Silakan masukkan nama terlebih dahulu.");
      return;
    }

    setNamaPeserta(namaInput.trim());
    mulaiTes("pretest");
  };

  // Memulai pretest, posttest, atau latihan
  const mulaiTes = (jenis) => {
    setJenisTes(jenis);
    setNomorSoal(0);
    setJawaban(null);
    setSkor(0);
    setJumlahBenar(0);
    setSelesai(false);

    if (jenis === "pretest") {
      setHalaman("pretest");
    } else if (jenis === "posttest") {
      setHalaman("posttest");
    } else {
      setHalaman("kuis");
    }
  };

  const mulaiKuis = () => mulaiTes("latihan");
  const mulaiPretest = () => mulaiTes("pretest");

  const mulaiPosttest = () => {
    if (hasilTes.pretest === null) {
      alert("Selesaikan pretest terlebih dahulu.");
      return;
    }

    mulaiTes("posttest");
  };

  const pilihMateri = (item) => {
    setMateriAktif(item);
    setHalaman("detail");
  };

  // Memilih jawaban
  const pilihJawaban = (index) => {
    if (jawaban !== null) return;

    setJawaban(index);

    if (index === soalSekarang.jawaban) {
      setSkor((nilai) => nilai + 100 / daftarSoal.length);
      setJumlahBenar((jumlah) => jumlah + 1);
    }
  };

  // Pindah ke soal berikutnya
  const soalSelanjutnya = () => {
    if (nomorSoal < daftarSoal.length - 1) {
      setNomorSoal((nomor) => nomor + 1);
      setJawaban(null);
    } else {
      const nilaiAkhir = Math.round(
        (jumlahBenar / daftarSoal.length) * 100
      );

      setSkor(nilaiAkhir);
      setSelesai(true);

      if (jenisTes === "pretest" || jenisTes === "posttest") {
        setHasilTes((hasil) => ({
          ...hasil,
          [jenisTes]: nilaiAkhir
        }));
      }
    }
  };

  const progressKuis =
    ((nomorSoal + (jawaban !== null ? 1 : 0)) / daftarSoal.length) * 100;

  const namaHalaman = {
    identitas: "Identitas Peserta Didik",
    beranda: "Beranda",
    materi: "Materi Pembelajaran",
    detail: materiAktif.nama,
    pretest: "Pretest",
    kuis: "Kuis Interaktif",
    posttest: "Posttest",
    hasil: "Hasil Belajar"
  };

  return (
    <div className="app-container">

      {/* SIDEBAR LAMA */}
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
            className={["pretest"].includes(halaman) ? "nav-item active" : "nav-item"}
            onClick={mulaiPretest}
          >
            <span>📝</span> Pretest
          </button>

          <button
            className={halaman === "kuis" ? "nav-item active" : "nav-item"}
            onClick={mulaiKuis}
          >
            <span>✎</span> Kuis Interaktif
          </button>

          <button
            className={halaman === "posttest" ? "nav-item active" : "nav-item"}
            onClick={mulaiPosttest}
          >
            <span>📋</span> Posttest
          </button>

          <button
            className={halaman === "hasil" ? "nav-item active" : "nav-item"}
            onClick={() => setHalaman("hasil")}
          >
            <span>📊</span> Hasil Belajar
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

      {/* KONTEN UTAMA */}
      <main className="main-content">

        <MusicPlayer />

        <header className="topbar">
          <div>
            <div className="breadcrumb">
              Ruang Data / {namaHalaman[halaman]}
            </div>

            <h3>
              {halaman === "identitas" && "Selamat Datang!"}
              {halaman === "beranda" && "Selamat Datang!"}
              {halaman === "materi" && "Materi Pembelajaran"}
              {halaman === "detail" && materiAktif.nama}
              {halaman === "pretest" && "Pretest"}
              {halaman === "kuis" && "Kuis Interaktif"}
              {halaman === "posttest" && "Posttest"}
              {halaman === "hasil" && "Hasil Belajar"}
            </h3>
          </div>

          <div className="topbar-profile">
            <div className="profile-avatar">🎓</div>
            <div>
              <strong>{namaPeserta || "Peserta Didik"}</strong>
              <span>Pelajar Ruang Data</span>
            </div>
          </div>
        </header>

        {/* =====================================
            HALAMAN IDENTITAS
        ===================================== */}

        {halaman === "identitas" && (
          <section className="page-content">
            <div className="identity-card">
              <Mascot />

              <span className="eyebrow">SELAMAT DATANG DI RUANG DATA</span>

              <h1>Halo, Teman Belajar! 👋</h1>

              <p>
                Sebelum memulai pembelajaran, silakan masukkan
                namamu terlebih dahulu.
              </p>

              <form onSubmit={mulaiBelajar} className="identity-form">
                <label htmlFor="namaPeserta">
                  Nama Peserta Didik
                </label>

                <input
                  id="namaPeserta"
                  type="text"
                  placeholder="Masukkan nama lengkap..."
                  value={namaInput}
                  onChange={(event) => setNamaInput(event.target.value)}
                  required
                />

                <button type="submit" className="primary-button full-button">
                  Mulai Belajar →
                </button>
              </form>

              <div className="identity-note">
                ✨ Persiapkan dirimu untuk belajar penyebaran data!
              </div>
            </div>
          </section>
        )}

        {/* =====================================
            HALAMAN BERANDA
        ===================================== */}

        {halaman === "beranda" && (
          <section className="page-content">
            <div className="hero-card">
              <div className="hero-text">
                <span className="hero-label">✦ TEMPAT BELAJAR MATEMATIKA</span>

                <h1>
                  Halo, {namaPeserta || "Teman Belajar"}!
                  Belajar Data Jadi Lebih Mudah dan Menyenangkan!
                </h1>

                <p>
                  Yuk, pahami penyebaran data melalui materi,
                  contoh soal, dan latihan interaktif.
                </p>

                <button
                  className="primary-button"
                  onClick={() => setHalaman("materi")}
                >
                  Mulai Belajar <span>→</span>
                </button>

                <div className="hero-note">
                  <span>✓</span> Belajar bertahap sesuai kemampuanmu
                </div>
              </div>

              <div className="hero-character">
                <div className="floating-label label-top">Let's Learn! ✨</div>
                <Mascot />
                <div className="floating-label label-bottom">
                  Matematika itu seru!
                </div>
              </div>
            </div>

            <div className="section-heading">
              <div>
                <span className="eyebrow">JELAJAHI MATERI</span>
                <h2>Apa yang akan kita pelajari?</h2>
              </div>

              <button
                className="text-button"
                onClick={() => setHalaman("materi")}
              >
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

            <div className="test-shortcuts">
              <div>
                <h3>Sudah selesai belajar?</h3>
                <p>Kerjakan posttest untuk mengetahui perkembanganmu.</p>
              </div>

              <button className="primary-button" onClick={mulaiPosttest}>
                Mulai Posttest →
              </button>
            </div>
          </section>
        )}

        {/* =====================================
            HALAMAN MATERI
        ===================================== */}

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

            <div className="test-shortcuts">
              <div>
                <h3>Sudah mempelajari materi?</h3>
                <p>Lanjutkan dengan latihan dan posttest.</p>
              </div>

              <button className="primary-button" onClick={mulaiPosttest}>
                Mulai Posttest →
              </button>
            </div>
          </section>
        )}

        {/* =====================================
            DETAIL MATERI
        ===================================== */}

        {halaman === "detail" && (
          <section className="page-content">
            <button
              className="back-button"
              onClick={() => setHalaman("materi")}
            >
              ← Kembali ke materi
            </button>

            <div className={`lesson-header ${materiAktif.warna}`}>
              <div>
                <span className="eyebrow">
                  MATERI {materiAktif.nomor}
                </span>

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

                  <div className="example-data">
                    {materiAktif.contoh}
                  </div>

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
                  <h3>Hai, {namaPeserta || "teman belajar"}!</h3>
                  <p>
                    Pelajari langkah demi langkah. Tidak perlu terburu-buru.
                  </p>
                </div>

                <div className="content-card">
                  <h3>Materi lainnya</h3>

                  {materi
                    .filter((item) => item.id !== materiAktif.id)
                    .map((item) => (
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

                <button
                  className="primary-button full-button"
                  onClick={mulaiKuis}
                >
                  Coba Kuis <span>→</span>
                </button>
              </aside>
            </div>
          </section>
        )}

        {/* =====================================
            PRETEST, KUIS, DAN POSTTEST
        ===================================== */}

        {["pretest", "kuis", "posttest"].includes(halaman) && (
          <section className="page-content quiz-page">
            {!selesai ? (
              <>
                <div className="quiz-welcome">
                  <div>
                    <span className="eyebrow">
                      {jenisTes === "pretest"
                        ? "TES SEBELUM BELAJAR"
                        : jenisTes === "posttest"
                        ? "TES SETELAH BELAJAR"
                        : "LATIHAN MANDIRI"}
                    </span>

                    <h1>
                      {jenisTes === "pretest"
                        ? "Ayo Kerjakan Pretest!"
                        : jenisTes === "posttest"
                        ? "Ayo Kerjakan Posttest!"
                        : "Uji Pemahamanmu!"}
                    </h1>

                    <p>
                      {namaPeserta ? `Semangat mengerjakan, ${namaPeserta}! ` : ""}
                      Pilih jawaban yang paling tepat.
                    </p>
                  </div>

                  <Mascot compact />
                </div>

                <div className="quiz-progress-card">
                  <div className="progress-info">
                    <strong>Progres {jenisTes}</strong>
                    <span>
                      Soal {nomorSoal + 1} dari {daftarSoal.length}
                    </span>
                  </div>

                  <div className="progress-track">
                    <div style={{ width: `${progressKuis}%` }}></div>
                  </div>
                </div>

                <div className="quiz-card">
                  <span className="eyebrow">
                    PERTANYAAN {nomorSoal + 1}
                  </span>

                  <h2>{soalSekarang.pertanyaan}</h2>

                  <div className="answer-options">
                    {soalSekarang.pilihan.map((pilihan, index) => {
                      let className = "answer-option";

                      if (
                        jawaban !== null &&
                        index === soalSekarang.jawaban
                      ) {
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

                          {jawaban !== null &&
                            index === soalSekarang.jawaban && <b>✓</b>}

                          {jawaban === index &&
                            jawaban !== soalSekarang.jawaban && <b>✕</b>}
                        </button>
                      );
                    })}
                  </div>

                  {jawaban !== null && (
                    <div
                      className={
                        jawaban === soalSekarang.jawaban
                          ? "feedback correct-feedback"
                          : "feedback wrong-feedback"
                      }
                    >
                      <strong>
                        {jawaban === soalSekarang.jawaban
                          ? "Hebat! Jawabanmu benar 🎉"
                          : "Belum tepat, yuk pelajari lagi!"}
                      </strong>

                      <p>{soalSekarang.pembahasan}</p>
                    </div>
                  )}

                  {jawaban !== null && (
                    <button
                      className="primary-button full-button"
                      onClick={soalSelanjutnya}
                    >
                      {nomorSoal === daftarSoal.length - 1
                        ? "Lihat Hasil"
                        : "Soal Berikutnya"}
                      <span>→</span>
                    </button>
                  )}
                </div>
              </>
            ) : (
              <div className="result-card">
                <div className="result-trophy">🏆</div>

                <span className="eyebrow">
                  HASIL {jenisTes.toUpperCase()}
                </span>

                <h1>
                  {jenisTes === "pretest"
                    ? "Pretest Selesai!"
                    : jenisTes === "posttest"
                    ? "Posttest Selesai!"
                    : "Kuis Selesai!"}
                </h1>

                <div className="score-circle">
                  <strong>{skor}</strong>
                  <span>Skor</span>
                </div>

                <h2>
                  {jumlahBenar} dari {daftarSoal.length} jawaban benar
                </h2>

                <p>
                  {skor >= 80
                    ? "Luar biasa! Hasil belajarmu sangat baik."
                    : "Tetap semangat! Terus pelajari materi dan tingkatkan pemahamanmu."}
                </p>

                {jenisTes === "pretest" && (
                  <button
                    className="primary-button"
                    onClick={() => setHalaman("materi")}
                  >
                    Lanjut ke Materi →
                  </button>
                )}

                {jenisTes === "posttest" && (
                  <button
                    className="primary-button"
                    onClick={() => setHalaman("hasil")}
                  >
                    Lihat Perbandingan Nilai →
                  </button>
                )}

                {jenisTes === "latihan" && (
                  <button className="primary-button" onClick={mulaiKuis}>
                    Ulangi Kuis ↻
                  </button>
                )}

                <button
                  className="text-button result-back"
                  onClick={() => setHalaman("beranda")}
                >
                  Kembali ke Beranda
                </button>
              </div>
            )}
          </section>
        )}

        {/* =====================================
            HASIL PRETEST DAN POSTTEST
        ===================================== */}

        {halaman === "hasil" && (
          <section className="page-content">
            <div className="intro-card">
              <div>
                <span className="eyebrow">EVALUASI PEMBELAJARAN</span>
                <h1>Hasil Belajarmu, {namaPeserta}!</h1>
                <p>
                  Berikut perbandingan hasil pretest dan posttest.
                </p>
              </div>

              <div className="intro-icon">📊</div>
            </div>

            <div className="score-comparison">
              <div className="score-box">
                <span>Nilai Pretest</span>
                <strong>
                  {hasilTes.pretest === null ? "-" : hasilTes.pretest}
                </strong>
                <p>Sebelum belajar</p>
              </div>

              <div className="score-box">
                <span>Nilai Posttest</span>
                <strong>
                  {hasilTes.posttest === null ? "-" : hasilTes.posttest}
                </strong>
                <p>Setelah belajar</p>
              </div>
            </div>

            {hasilTes.pretest !== null &&
              hasilTes.posttest !== null && (
                <div className="content-card evaluation-card">
                  <span className="eyebrow">HASIL PERKEMBANGAN</span>
                  <h2>
                    {hasilTes.posttest > hasilTes.pretest
                      ? "Ada peningkatan hasil belajar! 🎉"
                      : hasilTes.posttest === hasilTes.pretest
                      ? "Nilai belajar tetap."
                      : "Masih perlu latihan lagi."}
                  </h2>

                  <p>
                    Selisih nilai:{" "}
                    <strong>
                      {hasilTes.posttest - hasilTes.pretest > 0 ? "+" : ""}
                      {hasilTes.posttest - hasilTes.pretest} poin
                    </strong>
                  </p>

                  <p>
                    {hasilTes.posttest > hasilTes.pretest
                      ? "Nilai posttest lebih tinggi daripada pretest. Hal ini menunjukkan adanya peningkatan hasil tes setelah pembelajaran."
                      : hasilTes.posttest === hasilTes.pretest
                      ? "Nilai pretest dan posttest sama. Pelajari kembali materi untuk memperkuat pemahaman."
                      : "Nilai posttest lebih rendah daripada pretest. Cobalah mempelajari kembali materi dan latihan."}
                  </p>
                </div>
              )}

            {(hasilTes.pretest === null || hasilTes.posttest === null) && (
              <div className="content-card">
                <h2>Data tes belum lengkap</h2>
                <p>
                  Selesaikan pretest dan posttest untuk melihat
                  perbandingan hasil belajar.
                </p>

                {hasilTes.pretest === null && (
                  <button
                    className="primary-button"
                    onClick={mulaiPretest}
                  >
                    Kerjakan Pretest
                  </button>
                )}

                {hasilTes.pretest !== null &&
                  hasilTes.posttest === null && (
                    <button
                      className="primary-button"
                      onClick={mulaiPosttest}
                    >
                      Kerjakan Posttest
                    </button>
                  )}
              </div>
            )}

            <button
              className="text-button result-back"
              onClick={() => setHalaman("beranda")}
            >
              ← Kembali ke Beranda
            </button>
          </section>
        )}

        {/* FOOTER */}
        <footer className="footer">
          <span>✦ Ruang Data</span>
          <span>Belajar matematika dengan cara yang menyenangkan.</span>
          <span className="creator-name">by Nuril Ilmy</span>
        </footer>

      </main>
    </div>
  );
}

export default App;
