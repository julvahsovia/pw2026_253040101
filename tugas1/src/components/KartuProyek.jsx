// Props berisi data yang dikirim oleh App.jsx.
function KartuProyek({ nomor, judul, deskripsi, teknologi, tautan }) {
  return (
    <article className="kartu-proyek">
      <div className="kepala-kartu">
        <span className="nomor-proyek">PROJECT 0{nomor}</span>
        <span className="ikon-kode" aria-hidden="true">{'</>'}</span>
      </div>

      <h3>{judul}</h3>
      <p className="deskripsi-proyek">{deskripsi}</p>
      <p className="teknologi">{teknologi}</p>

      <a className="tombol-repo" href={tautan} target="_blank" rel="noreferrer">
        Lihat repositori <span aria-hidden="true">↗</span>
        <span className="teks-pembaca"> {judul}, membuka tab baru</span>
      </a>
    </article>
  );
}

export default KartuProyek;
