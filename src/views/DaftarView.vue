<script setup>
import FormBiodata from "../components/FormBiodata.vue";

function addForm() {
  const biodataContainer = document.querySelector(".biodata-container");
  // let urutanBio = document.createElement("h3");
  // urutanBio.innerHTML = "Biodata Pendaki";

  let form = document.createElement("form");
  form.setAttribute("action", "");
  form.setAttribute("class", "form-biodata");

  let labelNIK = document.createElement("label");
  labelNIK.setAttribute("for", "");
  labelNIK.innerHTML = "NIK";

  let inputNIK = document.createElement("input");
  inputNIK.setAttribute("type", "text");
  inputNIK.setAttribute("name", "NIK");
  inputNIK.setAttribute("placeholder", "NIK");

  let labelNama = document.createElement("label");
  labelNama.setAttribute("for", "");
  labelNama.innerHTML = "Nama";

  let inputNama = document.createElement("input");
  inputNama.setAttribute("type", "text");
  inputNama.setAttribute("name", "FullName");
  inputNama.setAttribute("placeholder", "Full Name");

  let radioButton = document.createElement("div");
  radioButton.setAttribute("class", "radio-button");

  let labelPria = document.createElement("label");
  labelPria.setAttribute("for", "");
  labelPria.innerHTML = "Pria";

  let inputPria = document.createElement("input");
  inputPria.setAttribute("type", "radio");
  inputPria.setAttribute("name", "gender");
  inputPria.setAttribute("value", "pria");
  inputPria.setAttribute("id", "pria");

  let labelWanita = document.createElement("label");
  labelWanita.setAttribute("for", "");
  labelWanita.innerHTML = "wanita";

  let inputWanita = document.createElement("input");
  inputWanita.setAttribute("type", "radio");
  inputWanita.setAttribute("name", "gender");
  inputWanita.setAttribute("value", "wanita");
  inputWanita.setAttribute("id", "wanita");

  let labelAlamat = document.createElement("label");
  labelAlamat.setAttribute("for", "");
  labelAlamat.innerHTML = "Alamat";

  let inputAlamat = document.createElement("input");
  inputAlamat.setAttribute("type", "text");
  inputAlamat.setAttribute("name", "Alamat");
  inputAlamat.setAttribute("placeholder", "Alamat");

  let labelNomorTelepon = document.createElement("label");
  labelNomorTelepon.setAttribute("for", "");
  labelNomorTelepon.innerHTML = "No Telepon";

  let inputNomorTelepon = document.createElement("input");
  inputNomorTelepon.setAttribute("type", "number");
  inputNomorTelepon.setAttribute("name", "Nohp");
  inputNomorTelepon.setAttribute("placeholder", "No Hp");

  let labelNomorTeleponOrtu = document.createElement("label");
  labelNomorTeleponOrtu.setAttribute("for", "");
  labelNomorTeleponOrtu.innerHTML = "No Telepon Orang Tua";

  let inputNomorTeleponOrtu = document.createElement("input");
  inputNomorTeleponOrtu.setAttribute("type", "number");
  inputNomorTeleponOrtu.setAttribute("name", "NoHpOrtu");
  inputNomorTeleponOrtu.setAttribute("placeholder", "No Hp Ortu");

  form.append(labelNIK);
  form.append(inputNIK);
  form.append(labelNama);
  form.append(inputNama);
  radioButton.append(inputPria);
  radioButton.append(labelPria);
  radioButton.append(inputWanita);
  radioButton.append(labelWanita);
  form.append(radioButton);
  form.append(labelAlamat);
  form.append(inputAlamat);
  form.append(labelNomorTelepon);
  form.append(inputNomorTelepon);
  form.append(labelNomorTeleponOrtu);
  form.append(inputNomorTeleponOrtu);
  // biodataContainer.append(urutanBio);
  biodataContainer.append(form);

  form.style.display = "flex";
  form.style.gap = "10px";
  form.style.flexDirection = "column";
  form.style.padding = "10px 20px";
  form.style.borderRadius = "10px";
  form.style.backgroundColor = "#E7DFD5";

  let inputs = document.querySelectorAll(".form-biodata input");
  console.log(inputs);
  inputs.forEach((input) => {
    input.style.padding = "5px";
    input.style.borderRadius = "10px";
  });

  radioButton.style.display = "flex";
  radioButton.style.gap = "10px";
}
</script>

<template>
  <main>
    <h2>Daftar Pendakian Gunung</h2>

    <div class="tanggal-container">
      <form action="">
        <label for="">Tanggal Berangkat</label>
        <input class="input-berangkat" type="date" />
        <label for="">Tanggal Pulang</label>
        <input class="input-pulang" type="date" />
      </form>
    </div>
    <h2>Biodata Pendaki</h2>
    <button class="add-button" @click="addForm">Tambah Pendaki</button>
    <div class="biodata-container">
      <form-biodata></form-biodata>
    </div>
    <button type="submit">Submit</button>
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  margin-top: 84px;
  gap: 10px;
  .tanggal-container {
    background-color: antiquewhite;
    border-radius: 10px;
    form {
      display: flex;
      gap: 10px;
      flex-direction: column;
      padding: 10px 20px;
      input{
        padding: 5px;
      }
    }
  }
  .add-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    width: 100px;
    height: 44px;
  }
  .biodata-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 15px;
    form {
      display: flex;
      gap: 10px;
      flex-direction: column;
      padding: 10px 20px;
      input {
        padding: 5px;
        border-radius: 10px;
      }
      .radio-button {
        display: flex;
        gap: 10px;
      }
    }
  }
  button {
    background-color: rgb(141, 220, 141);
    color: #050b38;
    padding: 10px;
    border-radius: 10px;
    font-size: medium;
    font-weight: bold;
    opacity: 0.8;
  }
  button:hover{
    cursor: pointer;
    opacity: 1;
    background-color: aquamarine;
  }
}
@media only screen and (min-width: 768px) {
  main {
    .biodata-container{
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
@media only screen and (min-width: 1020px) {
  main {
    .biodata-container{
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
@media only screen and (min-width: 1200px) {
  main {
    .biodata-container{
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
