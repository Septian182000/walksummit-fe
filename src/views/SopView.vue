<script setup>
</script>

<template>
  <main>
    <div class="header">
      <h1>SOP Gunung Sindoro</h1>
      <hr>
    </div>
    <div class="content">
      <div class="card peraturan">
        <h2>Peraturan</h2>
        <ol class="list-peraturan">
          <li><h3>Tenda (Min 2 kapasitas)</h3></li>
          <li><h3>P3K</h3></li>
          <li><h3>Kompor</h3></li>
          <li><h3>Nesting</h3></li>
          <li><h3>Logistik</h3></li>
          <li><h3>Trashback</h3></li>
          <li><h3>Jas Hujan</h3></li>
          <li><h3>Jaket Gunung</h3></li>
          <li><h3>Sarung Tangan Gunung</h3></li>
          <li><h3>Sepatu/Sendal Gunung</h3></li>
          <li><h3>Baju/Celana ganti (Min 2)</h3></li>
          <li><h3>HeadLamp/Senter</h3></li>
          <li><h3>Masker(Selama Pandemi)</h3></li>
          <li><h3>Hand Sanitizer(Selama Pandemi)</h3></li>
          <li><h3>Peralatan Makan</h3></li>
        </ol>
      </div>
      <div class="card larangan">
        <h2>Larangan</h2>
        <h3>
          Seperti halnya tempat wiasata yang lain, tempat wisata ini pun juga
          memiliki aturan yang sangat ketat, dan wajib di taati, seperti:
        </h3>
        <ol class="list-larangan">
          <li><h3>Jaga sopan santun, tidak boleh berbicara sembarangan.</h3></li>
          <li><h3>Penggunaan tisu basah sangat tidak dianjurkan.</h3></li>
          <li><h3>Setiap kegiatan pendakian harus melapor pada pihak yang berwenang.</h3></li>
          <li><h3>Bagi kamu yang mempunyai riwayat penyakit jantung sebaiknya tidak melakukan pendakian.</h3></li>
          <li><h3>Barang bawaan harus dilaporkan kepada petugas.</h3></li>
          <li><h3>Dilarang berbuay hal-hal yang tidak senonoh dengan yang bukan mukhrim.</h3></li>
          <li><h3>Dilarang membuat perapian (setiap pendaki harus ikut menjaga dan mewaspadai terjadinya kebakaran).</h3></li>
          <li><h3>Dilarang membawa obat-obatan terlarang, senapan, senjata tajam, dan sejenisnya.</h3></li>
          <li><h3>Dilarang berada atau mendekati bibir kawah, memanjat tiang, atau tugu saat di puncak.</h3></li>
          <li><h3>Dilarang buang air kecil atau besar di sembarang tempat.</h3></li>
          <li><h3>Dilarang meinggalkan sampah dalam bentuk apapun kecuali jejak kaki.</h3></li>
          <li><h3>Untuk berjaga-jaga dengan hal-hal yang tidak diinginkan, sebaiknya patuhi saja aturan yang telah ada.</h3></li>
        </ol>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Ms+Madi&family=Quicksand:wght@300&family=Rock+Salt&display=swap');
main{ 
  margin-top: 80px;
  padding: 20px;
  .header{
    h1{
      text-align: center;
      font-family: 'Quicksand', sans-serif;
    }
    hr{
      width: 80%;
      margin: 25px auto;
      background-color: #354259;
      height: 6px;
    }
  }
  .content{
    width: 70%;
    margin: 40px auto;
    .card{
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      border-radius: 8px;
      padding: 16px;
      background-color: #e6e6e6;
      margin-bottom: 30px;
      h2,h3 {
        font-family: "Quicksand", sans-serif;
        margin-bottom: 10px;
      }
      .list-peraturan, .list-larangan{
        padding: 16px;  
        li, h3{
          margin-bottom: 10px;
          font-family: 'Quicksand', sans-serif;
        }
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  main {
    .header {
      h1 {
        font-size: 25px;
      }
      hr {
        width: 80%;
      }
    }
    .content{
      width: 100%;
    }
  }
}
</style>
