<script setup>
function addForm(event) {
  const tambah = document.querySelector(".tambah");
  console.log(tambah);
}
</script>

<template>
  <main>
    <h1 class="head-title">Form Pendaftaran</h1>
    <form class="form-tgl"> 
      <label class="berangkat">Tanggal Berangkat</label> 
      <input class="input-berangkat" type="date">
      <label class="pulang">Tanggal Pulang</label> 
      <input class="input-pulang" type="date">
    </form>
    <form class="form-biodata">
      <label class="nik">Nik</label>
      <input class="input-nik" type="number">
      <label class="name">Name</label>
      <input class="input-name" type="text">
      <div class="gender">
        <label class="gender-title">Jenis Kelamin</label><br>
        <input type="radio" class="input-pria" name="Pria" value="Pria">
        <label class="pria">Pria</label>
        <input type="radio" class="input-wanita" name="Wanita" value="Wanita">
        <label class="wanita">Wanita</label>
      </div>
      <label class="no-tlp">No.Telp</label>
      <input class="input-tlp" type="number">
      <label class="nik">No.Telp Orang Tua</label>
      <input class="input-tlp-orangtua" type="number">
      <label class="alamat">Alamat</label>
      <input class="input-alamat" type="textarea">
    </form>
    <button class="tambah" @click="addForm">Tambah</button>
  </main>
</template>

<style scoped lang="scss">
main{
  width: 100%;
  margin-top: 84px;
  padding: 20px;
  .head-title{
    text-align: center;
  }
  .form-tgl{
    width: 350px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    .berangkat, .pulang{
      margin-top: 10px ;
    }
    .input-berangkat, .input-pulang{
      padding: 8px;
      margin-top: 10px;
      width: 200px;
    }
  }
  .form-biodata{
    width: 350px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    .nik, .name, .alamat, .no-tlp, .no-tlp-orangtua{
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .gender{
      margin-top: 10px;
      margin-bottom: 10px;
      .pria, .wanita {
        margin-left: 6px;
      }
      .input-pria, .input-wanita{
        margin: 10px 6px;
      }
    }
    .input-nik, .input-name, .input-alamat, .input-tlp, .input-tlp-orangtua{
      padding: 8px;
    }
  }
  .tambah{
    width: 60%;
    height: 30px;
    margin: 0 auto;
  }
}

@media only screen and (min-width: 1200px) {
  main {
    .form-tgl, .form-biodata{
      width: 800px;
    }
  }
}
</style>
