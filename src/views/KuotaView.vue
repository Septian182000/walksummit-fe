<script setup>
</script>

<template>
  <main>
    <div class="header">
      <h1>Kuota Tiap Jalur</h1>
    </div>
    <div class="content">
      <div class="card jalur_1">
        <h2>Via Kledung</h2>
        <h3>Sisa Kuota Hari ini : 500</h3>
      </div>
      <div class="card jalur_2">
        <h2>Via Alang-Alang Sewu</h2>
        <h3>Sisa Kuota Hari ini : 500</h3>
      </div>
      <div class="card jalur_3">
        <h2>Via Ndoro Arum</h2>
        <h3>Sisa Kuota Hari ini : 500</h3>
      </div>
      <div class="card jalur_4">
        <h2>Via Sigedang</h2>
        <h3>Sisa Kuota Hari ini : 500</h3>
      </div>
      <div class="card jalur_5">
        <h2>Via Bansari</h2>
        <h3>Sisa Kuota Hari ini : 500</h3>
      </div>
      <div class="card jalur_6">
        <h2>Via Bedakah</h2>
        <h3>Sisa Kuota Hari ini : 500</h3>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Ms+Madi&family=Quicksand:wght@300&family=Rock+Salt&display=swap');
main{
  margin-top: 84px;
  padding: 20px;
  h1{
    text-align: center;
    font-family: 'Quicksand', sans-serif;
  }
  .content{
    width: 70%;
    margin: 40px auto;
    .card{
      margin-bottom: 20px;
      padding: 16px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      border-radius: 8px;
      h2,
      h3 {
        font-family: "Quicksand", sans-serif;
        margin-bottom: 16px;
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
      h2 {
        font-size: 20px;
      }
      h3 {
        font-size: 16px;
      }
    }
  }
}
</style>
