import React, { useState, useEffect } from "react";
import InputField from "../components/FormInput";
import "../index.css";

export default function FormSegitiga() {
  const [alas, setAlas] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [hasil, setHasil] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!alas || !tinggi) {
      setError("Silakan isi semua input terlebih dahulu.");
      setHasil(null);
      return;
    }

    const luas = 0.5 * parseFloat(alas) * parseFloat(tinggi);
    setHasil(luas.toFixed(2));
    setError("");
  };

  // ⏱️ Auto-hide hasil setelah 5 detik
  useEffect(() => {
    if (hasil !== null) {
      const timer = setTimeout(() => {
        setHasil(null);
      }, 5000); // 5 detik

      return () => clearTimeout(timer); // bersihkan jika user submit lagi
    }
  }, [hasil]);

  return (
    <>
      <div className="stars"></div>
      <div className="form-wrapper">
        <div className="form-container">
          <h2 className="form-title">Hitung Luas Segitiga</h2>

          <form onSubmit={handleSubmit}>
            <InputField
              label="Alas (cm)"
              type="number"
              value={alas}
              onChange={(e) => setAlas(e.target.value)}
              name="alas"
            />
            <InputField
              label="Tinggi (cm)"
              type="number"
              value={tinggi}
              onChange={(e) => setTinggi(e.target.value)}
              name="tinggi"
            />
            <button type="submit" className="submit-btn">
              Hitung Luas
            </button>
          </form>

          {/* Pesan Validasi atau Hasil */}
          <div className="hasil-box">
            {error && (
              <div className="alert-error">
                <strong>⚠️ </strong>
                {error}
              </div>
            )}
            {hasil !== null && !error && (
              <div className="hasil-value">
                <p>Luas Segitiga:</p>
                <span>{hasil} cm²</span>
              </div>
            )}
          </div>

          {/* Penjelasan */}
          <div className="mt-10">
            <h3 className="penjelasan-title">Penjelasan Fitur:</h3>
            <table className="fitur-table">
              <thead>
                <tr>
                  <th>Fitur</th>
                  <th>Penjelasan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>TailwindCSS</td>
                  <td>
                    Nah, yang kita gunakan ini tuh buat styling tampilan dengan
                    utility class. Tapi kita tetap bisa menggunakan manual CSS
                    juga loh.
                  </td>
                </tr>
                <tr>
                  <td>Reusable Component</td>
                  <td>
                    Di sini, kita bikin satu komponen input yang bisa dipakai
                    berkali-kali. Jadi nggak perlu nulis ulang untuk alas dan
                    tinggi, tinggal panggil aja dan masukin inputan parameter
                    yang sesuai.
                  </td>
                </tr>
                <tr>
                  <td>React State</td>
                  <td>
                    Nah, state ini berfungsi buat nyimpen nilai dari inputan
                    alas, tinggi, dan hasil luasnya.Ia juga bisa mengupdate
                    nilai secara dinamis. Jadi semua data ke-handle secara
                    dinamis.
                  </td>
                </tr>
                <tr>
                  <td>Conditional Rendering</td>
                  <td>
                    Kita pakai ini supaya kalau belum submit, muncul pesan “isi
                    dulu ya ”. Tapi kalau udah, langsung nampilin hasil luas
                    segitiganya, dan hasilnya akan{" "}
                    <b>hilang otomatis setelah beberapa detik .</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
