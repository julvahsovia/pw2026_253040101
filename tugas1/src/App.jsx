import KartuProyek from './components/KartuProyek.jsx';
import daftarProyek from './dataProyek.js';
import './App.css';

function App() {
  return (
    <>
      <a className="lewati" href="#proyek">Lewati ke daftar project</a>

      <header className="header">
        <div className="wadah baris-header">
          <a className="nama" href="#awal">Julvah<span>.</span></a>
          <a className="menu" href="#proyek">Lihat project</a>
        </div>
      </header>

      <main id="awal" className="wadah">
        <section className="pengantar" aria-labelledby="judul-halaman">
          <p className="label">PRAKTIKUM WEB · Pertemuan 1</p>
          <h1 id="judul-halaman">Halo, saya Julvah.</h1>
          <p className="subjudul">Showcase Portofolio Mini</p>
          <p className="ringkasan">
            Tempat mengumpulkan hasil karya website dan belajar membuat website melalui project-project sederhana secara bertahap.
          </p>
          <span className="npm">NPM 253040101</span>
        </section>

        <section id="proyek" className="bagian-proyek" aria-labelledby="judul-proyek">
          <div className="judul-bagian">
            <h2 id="judul-proyek">Koleksi project</h2>
          </div>
          <p className="keterangan">
            Beberapa hasil latihan dan project web yang saya kerjakan.
          </p>

          <div className="daftar-proyek">
            {/* map mengubah setiap data menjadi satu kartu. */}
            {daftarProyek.map((proyek) => (
              <KartuProyek
                key={proyek.id}
                nomor={proyek.id}
                judul={proyek.judul}
                deskripsi={proyek.deskripsi}
                teknologi={proyek.teknologi}
                tautan={proyek.tautan}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="footer wadah">
        <p>Julvah.</p>
        <p><a href="https://github.com/julvahsovia" target="_blank" rel="noreferrer">GitHub Julvah</a> · React &amp; CSS</p>
      </footer>
    </>
  );
}

export default App;
