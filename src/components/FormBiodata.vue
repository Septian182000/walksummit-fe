<script setup></script>

<template>
  <form class="form-biodata" action="">
    <label for="">NIK</label>
    <input type="number" placeholder="NIK" />
    <label for="">Nama</label>
    <input type="text" placeholder="Full Name" />
    <label for="">Jenis kelamin</label>
    <div class="radio-button">
      <div>
        <input type="radio" name="gender" value="pria" id="pria">
        <label for="">Pria</label>
      </div>

      <div>
        <input type="radio" name="gender" value="wanita" id="wanita">
        <label for="">Wanita</label>
      </div>
    </div>
    <label for="">Alamat</label>
    <input type="text" placeholder="Alamat" />
    <label for="">Nomor Telepon</label>
    <input type="number" placeholder="No Hp" />
    <label for="">Nomor Telepon Orang Tua</label>
    <input type="number" placeholder="Nomor Hp Ortu" />
  </form>
</template>

<style scoped lang="scss">
form {
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #e7dfd5;
  input {
    padding: 5px;
    border-radius: 10px;
  }
  .radio-button {
    display: flex;
    gap: 10px;
  }
}
</style>
