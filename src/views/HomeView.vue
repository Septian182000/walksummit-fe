<script setup></script>

<template>
  <main>
    <section id="hero">
      <picture>
        <source />
        <img srcset="../../public/images/gunungsindoro.jpg" alt="" />
      </picture>
      <div class="welcome">
        <h2>Selamat datang di gunung Sindoro</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel
          arcu sed urna feugiat ultrices. Sed feugiat pulvinar nulla id mattis.
          Nam sed metus at leo ultricies tincidunt. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia curae; Mauris
          ipsum risus, placerat vitae dolor ac, ullamcorper hendrerit sem. Fusce
          quis dolor in dui accumsan congue. Praesent a laoreet mauris.
        </p>
      </div>
    </section>
    <section id="informasi-gunung">
      <h2>Informasi Gunung Sindoro</h2>
      <div class="informasi-detail-gunung">
        <p>Ketinggian Gunung: 3.153 mdpl</p>
        <p>Koordinat Lokasi Gunung: 7.3010463°S 109.9968767°E</p>
        <p>Jenis Gunung: Semi Aktif</p>
        <p>Rute Normal Pendakian: Kledung</p>
        <p>Lokasi: Desa Katekan, Kecamatan Ngadirejo</p>
        <p>Wilayah: Kabupaten Temanggung, dan Kabupaten Wonosobo.</p>
      </div>
      <h2>Informasi Pendaki Gunung Sindoro</h2>
      <div class="informasi-pendaki-gunung">
        <p>Jumlah Pendaki Saat Ini: 30 Orang</p>
        <p>Kuota Pendakian Tersisa: 20 Orang</p>
        <p>Batas Maksimal Pendaki / Hari: 50 Orang</p>
      </div>
      <div class="container">
        <a class="daftar" href="/daftar">Ingin daftar mendaki gunung ?</a>
      </div>
    </section>
    <section id="alur-daftar-pendaki">
      <h2>Alur Pendaftaran Pendakian</h2>

      <div class="alur-daftar-container">
        <div class="alur-daftar-1">
          <picture>
            <source />
            <img src="../../public/images/gunungsindoro.jpg" alt="" />
          </picture>
          <p>Alur daftar ke-1</p>
        </div>

        <div class="alur-daftar-2">
          <picture>
            <source />
            <img src="../../public/images/Kuota_walksummit.png" alt="" />
          </picture>
          <p>Cek Kuota Jalur yang tersedia</p>
        </div>

        <div class="alur-daftar-3">
          <picture>
            <source />
            <img src="../../public/images/SOP_walksummit.png" alt="" />
          </picture>
          <p>Baca dan pahami SOP Pendakian</p>
        </div>

        <div class="alur-daftar-4">
          <picture>
            <source />
            <img src="../../public/images/Daftar_walksummit.png" alt="" />
          </picture>
          <p>Daftar Pendakian dengan menekan tombol tambah pendaki</p>
        </div>

        <div class="alur-daftar-5">
          <picture>
            <source />
            <img src="../../public/images/Search_walksummit.png" alt="" />
          </picture>
          <p>Search berdasarkan ID grup</p>
        </div>

        <div class="alur-daftar-6">
          <picture>
            <source />
            <img src="" alt="" />
          </picture>
          <p>Alur daftar ke-1</p>
        </div>

        <div class="alur-daftar-7">
          <picture>
            <source />
            <img src="" alt="" />
          </picture>
          <p>Alur daftar ke-1</p>
        </div>

        <div class="alur-daftar-8">
          <picture>
            <source />
            <img src="" alt="" />
          </picture>
          <p>Alur daftar ke-1</p>
        </div>

        <div class="alur-daftar-9">
          <picture>
            <source />
            <img src="" alt="" />
          </picture>
          <p>Alur daftar ke-1</p>
        </div>
      </div>
    </section>
    <section id="galeri-gunung">
      <h2>Galeri Gunung Sindoro</h2>
      <div class="list-galeri">
        <picture>
          <source />
          <img srcset="../../public/images/ke-1.jpg" alt="gunung preview" />
        </picture>
        <picture>
          <source />
          <img srcset="../../public/images/ke-2.jpg" alt="gunung preview" />
        </picture>
        <picture>
          <source />
          <img
            srcset="../../public/images/gunungsindoro.jpg"
            alt="gunung preview"
          />
        </picture>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
main {
  width: 100%;
  height: 100vh;
  margin-top: 80px;
  #hero {
    position: relative;
    z-index: -2;
    picture {
      img {
        width: 100%;
        min-height: 400px;
        max-height: 700px;
      }
    }
    .welcome {
      padding: 10px 20px;
      position: absolute;
      z-index: 0;
      top: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      color: white;
    }
  }
  #informasi-gunung {
    display: flex;
    padding: 10px 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    .informasi-detail-gunung {
      width: 100%;
      padding: 20px 40px;
      display: flex;
      flex-direction: column;
      gap: 5px;
      font-size: 18px;
      background-color: #dbdffd;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    .informasi-pendaki-gunung {
      width: 100%;
      padding: 20px 40px;
      display: flex;
      flex-direction: column;
      gap: 5px;
      font-size: 18px;
      background-color: #dbdffd;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    .container {
      display: flex;
      padding: 20px 20px;
      border-radius: 10px;
      flex-direction: column;
      align-items: center;
      background-color: yellowgreen;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      z-index: 0;
    }
    .daftar {
      font-family: "Dancing Script", cursive;
      color: black;
      position: relative;
      z-index: 0;
    }
    .daftar::after {
      position: absolute;
      content: "";
      width: 0%;
      height: 4px;
      background-color: red;
      left: 50%;
      bottom: -10px;
      transition: all 0.4s ease-in-out;
    }
    .container:hover {
      cursor: pointer;
    }
    .container:hover .daftar::after {
      width: 100%;
      left: 0;
    }
  }
  #alur-daftar-pendaki {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    .alur-daftar-container {
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(1, 1fr);
      .alur-daftar-1,
      .alur-daftar-2,
      .alur-daftar-3,
      .alur-daftar-4,
      .alur-daftar-5,
      .alur-daftar-6,
      .alur-daftar-7,
      .alur-daftar-8,
      .alur-daftar-9 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px 20px;
        gap: 10px;
        background-color: #dbdffd;
        picture {
          img {
            width: 100%;
            min-height: 250px;
            max-width: 700px;
            max-height: 400px;
            background-color: #9d9a9a;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
          }
        }
      }
    }
  }
  #galeri-gunung {
    display: flex;
    padding: 10px 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    .list-galeri {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      justify-content: center;
      align-items: center;
      gap: 10px;
      picture {
        background-color: rgb(236, 237, 254);
        padding: 20px;
        img {
          width: 100%;
          height: 300px;
          background-color: #9d9a9a;
        }
      }
    }
  }
}
@media only screen and (min-width: 768px) {
  main {
    #alur-daftar-pendaki {
      .alur-daftar-container {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    #galeri-gunung {
      .list-galeri {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
}
@media only screen and (min-width: 1020px) {
  main {
    margin-top: 70px;
    #alur-daftar-pendaki {
      .alur-daftar-container {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    #galeri-gunung {
      .list-galeri {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
}
@media only screen and (min-width: 1200px) {
  main {
    #alur-daftar-pendaki {
      .alur-daftar-container {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    #galeri-gunung {
      .list-galeri {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
}
</style>
