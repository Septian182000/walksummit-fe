<script setup>
import FormBiodata from "../components/FormBiodata.vue";
import { reactive } from "@vue/reactivity";
const emit = defineEmits(["formChanges"]);
import axios from "axios";

const forms = reactive([]);

const formsPendakian = reactive({
  berangkat: "",
  pulang: "",
  jalur: "",
});

function callback(id, form) {
  const targetIndex = forms.findIndex((form) => form.id == id);
  forms[targetIndex] = form;
}
function addForm() {
  forms.push({
    id: Date.now(),
    nik: "",
    nama: "",
    gender: "",
    alamat: "",
    noHp: "",
    noHpOrtu: "",
  });
}
function checkForms() {
  let jalur = document.querySelector(".jalur").value;
  let berangkat = document.querySelector(".input-berangkat").value;
  let pulang = document.querySelector(".input-pulang").value;

  const tambahGrup = async () => {
    let alertRequired = document.querySelector(".alert-required");
    if (!jalur || !berangkat || !pulang) {
      alertRequired.innerHTML = `
      <div class="message-alert">
      <p>* Semua Input Wajib diisi</p>
      </div>
      <style>
      .message-alert{
        display: flex;
        padding: 0px 20px 20px 20px;
      }
      .message-alert p {
        display: flex;
        color: red;
        padding: 10px;
        font-family: 'Quicksand';
        font-weight: bold;
        font-style: italic;
        background-color: white;
        border-radius: 10px;
      }
      </style>
      `;
    } else {
      const data = await axios
        .post(`http://walksummit-be.herokuapp.com/api/tambah-grup`, {
          jalur_id: jalur,
          tgl_brangkat: berangkat,
          tgl_pulang: pulang,
        })
        .then(function (response) {
          return response.data.data.id;
        })
        .catch((error) => console.log(error));
      return data;
    }
  };

  const anggota = forms.map((form) => ({
    nik: form.nik,
    alamat: form.alamat,
    nama: form.nama,
    no_telp: form.noHp,
    no_telp_orgtua: form.noHpOrtu,
    jenis_kelamin: form.gender,
  }));

  const stringJSON = JSON.stringify(anggota);
  const objectBiasa = JSON.parse(stringJSON);

  const tambahPendaki = async () => {
    const idGrup = await tambahGrup();
    let inputForm = document.querySelectorAll("input");
    let alertTambah = document.querySelector(".alert-tambah-pendaki");
    objectBiasa.forEach(async (object) => {
      if (!inputForm.value) {
        let tesValue = inputForm.forEach((form) => {
          let valueForm = form.value;
          if (!valueForm) {
            alertTambah.innerHTML = `
          <div class="message-alert-tambah">
            <p>Semua Input Wajib diisi</p>
          </div>
          <style>
          .message-alert-tambah{
            display: flex;
            padding: 20px 20px 0px 20px;
          }
          .message-alert-tambah p {
            display: flex;
            color: white;
            padding: 10px;
            font-weight: bold;
            background-color: red;
            border-radius: 10px;
          }
          </style>
          `;
          }
        });
      }
      const data = await axios
        .post(`http://walksummit-be.herokuapp.com/api/tambah-pelanggan`, {
          grup_id: idGrup,
          nik: object.nik,
          nama: object.nama,
          alamat: object.alamat,
          no_telp: object.no_telp,
          no_telp_orgtua: object.no_telp_orgtua,
          jenis_kelamin: object.jenis_kelamin,
        })
        .then(function () {
          showModal(idGrup);
        })
        .catch((error) => console.log(error));
      return data;
    });
  };
  tambahPendaki();

  const showModal = (idGrup) => {
    const containerModal = document.querySelector(".modal-container");
    containerModal.innerHTML = `
    <div class="message-modal">
      <h1><i class="fa-solid fa-triangle-exclamation"></i>Peringatan Walkers</h1>
      <h2>SIMPAN ID GRUP ANDA UNTUK</h2>
      <h3>"VERIFIKASI PEMBAYARAN"</h3>
      <p class="id-grup-modal">ID GRUP ANDA</p>
      <p class="id-grup">${idGrup}</p>
    <div class="tutup-modal">
        <p>Tutup</p>
    </div>
    <div class="note">
        <p>* Harap menghubungi kontak yang tersedia</p>
    </div>
    </div>
    <style>
    .modal-container {
      display: flex;
      flex-direction: column;
      gap: 5px;
      justify-content: center;
      align-items: center;
      position: fixed;
      z-index: 1; /* Sit on top */
      padding-top: 100px;
      display: none;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgb(0, 0, 0);
      background-color: rgba(0, 0, 0, 0.4);
    }
    .message-modal {
      width: 45%;
      background-color: #DAEAF1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
      padding: 15px;
      gap: 5px;
      border: 1px solid #888;
    }
    .fa-solid{
      margin-right: 10px;
    }
    .message-modal h1 {
      font-family: "Quicksand", sans-serif;
      font-size: 50px;
      color: red;
      margin-bottom: 20px;
    }
    .message-modal h2 {
      font-family: "Quicksand", sans-serif;
      font-weight: 800;
    }
    .message-modal h3 {
      font-family: "Quicksand", sans-serif;
      font-weight: 800;
      margin-bottom: 20px;
    }
    .message-modal p {
      font-family: "Quicksand", sans-serif;
      font-weight: 800;
    }
    .message-modal .id-grup-modal {
      font-size: 24px;
    }
    .message-modal .id-grup {
      font-size: 80px;
      margin-bottom: 10px;
    }
    .tutup-modal {
      background-color: white;
      font-weight: bold;
      text-align: center;
      color: black;
      padding: 10px;
      width: 100px;
      margin-bottom: 20px;
      border-radius: 10px;
    }
    .tutup-modal:hover {
      background-color: red;
      cursor: pointer;
      color: white;
    }
    .message-modal .note{
      font-style: italic;
    }
    @media only screen and (max-width: 729px) {
      .message-modal{
        width: 85%;
      }
      .message-modal h1 {
        font-size: 30px;
      }
      .message-modal h2 {
        font-size: 18px;
      }
      .message-modal h3 {
        font-size: 18px;
      }
    }
    @media only screen and (min-width: 730px) {
      .message-modal{
        width: 70%;
      }
      .message-modal h1 {
        font-size: 40px;
      }
      .message-modal h2 {
        font-size: 18px;
      }
      .message-modal h3 {
        font-size: 18px;
      }
    }
    @media only screen and (min-width: 900px) {
      .message-modal{
        width: 60%;
      }
      .message-modal h1 {
        font-size: 50px;
      }
      .message-modal h2 {
        font-family: "Quicksand", sans-serif;
        font-weight: 800;
        font-size: 25px;
      }
      .message-modal h3 {
        font-family: "Quicksand", sans-serif;
        font-weight: 800;
        font-size: 20px;
        margin-bottom: 20px;
      }
    }
    @media only screen and (min-width: 1024px) {
      .message-modal{
        width: 60%;
      }
    }
    @media only screen and (min-width: 1440px) {
      .message-modal{
        width: 45%;
      }
    }
    </style>
    `;
    containerModal.style.display = "flex";

    containerModal.addEventListener("click", (event) => {
      event.stopPropagation();
      containerModal.style.display = "none";
      const listContainer = document.querySelector("#list-grup");
      listContainer.innerHTML = "";
    });
  };
}

// const showModal = (idGrup) => {
//   const containerModal = document.querySelector(".modal-container");
//   containerModal.innerHTML = `
//     <div class="message-modal">
//       <h1><i class="fa-solid fa-triangle-exclamation"></i>Peringatan Walkers</h1>
//       <h2>SIMPAN ID GRUP ANDA UNTUK</h2>
//       <h3>"VERIFIKASI PEMBAYARAN"</h3>
//       <p class="id-grup-modal">ID GRUP ANDA</p>
//       <p class="id-grup">1265</p>
//     <div class="tutup-modal">
//         <p>Tutup</p>
//     </div>
//     <div class="note">
//         <p>* Harap menghubungi kontak yang tersedia</p>
//     </div>
//     </div>
//     <style>
//     .modal-container {
//       display: flex;
//       flex-direction: column;
//       gap: 5px;
//       justify-content: center;
//       align-items: center;
//       position: fixed;
//       z-index: 1; /* Sit on top */
//       padding-top: 100px;
//       display: none;
//       left: 0;
//       top: 0;
//       width: 100%;
//       height: 100%;
//       overflow: auto;
//       background-color: rgb(0, 0, 0);
//       background-color: rgba(0, 0, 0, 0.4);
//     }
//     .message-modal {
//       width: 45%;
//       background-color: #DAEAF1;
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//       align-items: center;
//       border-radius: 20px;
//       padding: 15px;
//       gap: 5px;
//       border: 1px solid #888;
//     }
//     .fa-solid{
//       margin-right: 10px;
//     }
//     .message-modal h1 {
//       font-family: "Quicksand", sans-serif;
//       font-size: 50px;
//       color: red;
//       margin-bottom: 20px;
//     }
//     .message-modal h2 {
//       font-family: "Quicksand", sans-serif;
//       font-weight: 800;
//     }
//     .message-modal h3 {
//       font-family: "Quicksand", sans-serif;
//       font-weight: 800;
//       margin-bottom: 20px;
//     }
//     .message-modal p {
//       font-family: "Quicksand", sans-serif;
//       font-weight: 800;
//     }
//     .message-modal .id-grup-modal {
//       font-size: 24px;
//     }
//     .message-modal .id-grup {
//       font-size: 80px;
//       margin-bottom: 10px;
//     }
//     .tutup-modal {
//       background-color: white;
//       font-weight: bold;
//       text-align: center;
//       color: black;
//       padding: 10px;
//       width: 100px;
//       margin-bottom: 20px;
//       border-radius: 10px;
//     }
//     .tutup-modal:hover {
//       background-color: red;
//       cursor: pointer;
//       color: white;
//     }
//     .message-modal .note{
//       font-style: italic;
//     }
//     @media only screen and (max-width: 729px) {
//       .message-modal{
//         width: 85%;
//       }
//       .message-modal h1 {
//         font-size: 30px;
//       }
//       .message-modal h2 {
//         font-size: 18px;
//       }
//       .message-modal h3 {
//         font-size: 18px;
//       }
//     }
//     @media only screen and (min-width: 730px) {
//       .message-modal{
//         width: 70%;
//       }
//       .message-modal h1 {
//         font-size: 40px;
//       }
//       .message-modal h2 {
//         font-size: 18px;
//       }
//       .message-modal h3 {
//         font-size: 18px;
//       }
//     }
//     @media only screen and (min-width: 900px) {
//       .message-modal{
//         width: 60%;
//       }
//       .message-modal h1 {
//         font-size: 50px;
//       }
//       .message-modal h2 {
//         font-family: "Quicksand", sans-serif;
//         font-weight: 800;
//         font-size: 25px;
//       }
//       .message-modal h3 {
//         font-family: "Quicksand", sans-serif;
//         font-weight: 800;
//         font-size: 20px;
//         margin-bottom: 20px;
//       }
//     }
//     @media only screen and (min-width: 1024px) {
//       .message-modal{
//         width: 60%;
//       }
//     }
//     @media only screen and (min-width: 1440px) {
//       .message-modal{
//         width: 45%;
//       }
//     }
//     </style>
//     `;
//   containerModal.style.display = "flex";

//   containerModal.addEventListener("click", (event) => {
//     event.stopPropagation();
//     containerModal.style.display = "none";
//   });
// };

// function addForm() {
//   const tambahButton = document.querySelector('.add-button');
//   tambahButton.onclick = function(){
//    let i = 0;
//    let count = i++;
//    console.log(count);
// }
//   const biodataContainer = document.querySelector(".biodata-container");
//   let form = document.createElement("form");
//   form.setAttribute("action", "");
//   form.setAttribute("class", "form-biodata");
//   let labelNIK = document.createElement("label");
//   labelNIK.setAttribute("for", "");
//   labelNIK.innerHTML = "NIK";
//   let inputNIK = document.createElement("input");
//   inputNIK.setAttribute("type", "text");
//   inputNIK.setAttribute("name", "NIK");
//   inputNIK.setAttribute("class", `nik`);
//   inputNIK.setAttribute("placeholder", "NIK");
//   let labelNama = document.createElement("label");
//   labelNama.setAttribute("for", "");
//   labelNama.innerHTML = "Nama";
//   let inputNama = document.createElement("input");
//   inputNama.setAttribute("type", "text");
//   inputNama.setAttribute("name", "FullName");
//   inputNama.setAttribute("class", `nama`);
//   inputNama.setAttribute("placeholder", "Full Name");
//   let radioButton = document.createElement("div");
//   radioButton.setAttribute("class", "radio-button");
//   let labelPria = document.createElement("label");
//   labelPria.setAttribute("for", "");
//   labelPria.innerHTML = "Pria";
//   let inputPria = document.createElement("input");
//   inputPria.setAttribute("type", "radio");
//   inputPria.setAttribute("name", "gender");
//   inputPria.setAttribute("value", "L");
//   inputPria.setAttribute("class", `gender`);
//   inputPria.setAttribute("id", "pria");
//   let labelWanita = document.createElement("label");
//   labelWanita.setAttribute("for", "");
//   labelWanita.innerHTML = "wanita";
//   let inputWanita = document.createElement("input");
//   inputWanita.setAttribute("type", "radio");
//   inputWanita.setAttribute("name", "gender");
//   inputWanita.setAttribute("value", "P");
//   inputWanita.setAttribute("class", `gender`);
//   inputWanita.setAttribute("id", "wanita");
//   let labelAlamat = document.createElement("label");
//   labelAlamat.setAttribute("for", "");
//   labelAlamat.innerHTML = "Alamat";
//   let inputAlamat = document.createElement("input");
//   inputAlamat.setAttribute("type", "text");
//   inputAlamat.setAttribute("name", "Alamat");
//   inputAlamat.setAttribute("class", `alamat`);
//   inputAlamat.setAttribute("placeholder", "Alamat");
//   let labelNomorTelepon = document.createElement("label");
//   labelNomorTelepon.setAttribute("for", "");
//   labelNomorTelepon.innerHTML = "No Telepon";
//   let inputNomorTelepon = document.createElement("input");
//   inputNomorTelepon.setAttribute("type", "number");
//   inputNomorTelepon.setAttribute("name", "Nohp");
//   inputNomorTelepon.setAttribute("class", `noHp`);
//   inputNomorTelepon.setAttribute("placeholder", "No Hp");
//   let labelNomorTeleponOrtu = document.createElement("label");
//   labelNomorTeleponOrtu.setAttribute("for", "");
//   labelNomorTeleponOrtu.innerHTML = "No Telepon Orang Tua";
//   let inputNomorTeleponOrtu = document.createElement("input");
//   inputNomorTeleponOrtu.setAttribute("type", "number");
//   inputNomorTeleponOrtu.setAttribute("name", "NoHpOrtu");
//   inputNomorTeleponOrtu.setAttribute("class", `noHpOrtu`);
//   inputNomorTeleponOrtu.setAttribute("placeholder", "No Hp Ortu");
//   form.append(labelNIK);
//   form.append(inputNIK);
//   form.append(labelNama);
//   form.append(inputNama);
//   radioButton.append(inputPria);
//   radioButton.append(labelPria);
//   radioButton.append(inputWanita);
//   radioButton.append(labelWanita);
//   form.append(radioButton);
//   form.append(labelAlamat);
//   form.append(inputAlamat);
//   form.append(labelNomorTelepon);
//   form.append(inputNomorTelepon);
//   form.append(labelNomorTeleponOrtu);
//   form.append(inputNomorTeleponOrtu);
//   // biodataContainer.append(urutanBio);
//   biodataContainer.append(form);
//   form.style.display = "flex";
//   form.style.gap = "10px";
//   form.style.flexDirection = "column";
//   form.style.padding = "10px 20px";
//   form.style.borderRadius = "10px";
//   form.style.backgroundColor = "#dbdffd";
//   let inputs = document.querySelectorAll(".form-biodata input");
//   inputs.forEach((input) => {
//     input.style.padding = "5px";
//     input.style.borderRadius = "10px";
//   });
//   radioButton.style.display = "flex";
//   radioButton.style.gap = "10px";
// }

// function addForms() {
//   let jalur = document.querySelector(".jalur").value;
//   let berangkat = document.querySelector(".input-berangkat").value;
//   let pulang = document.querySelector(".input-pulang").value;

//   const tambahGrup = async () => {
//     const data = await axios
//       .post(`http://127.0.0.1:8000/api/tambah-grup`, {
//         jalur_id: jalur,
//         tgl_brangkat: berangkat,
//         tgl_pulang: pulang,
//       })
//       .then(function (response) {
//         console.log(response.data.data.id);
//         return response.data.data.id;
//       })
//       .catch((error) => console.log(error));
//     return data;
//   };
//   tambahGrup();
//   let nik = document.querySelector('.nik').value;
//   let nama = document.querySelector('.nama').value;
//   let alamat = document.querySelector('.alamat').value;
//   let noTelp = document.querySelector('.noHp').value;
//   let noTelpOrtu = document.querySelector('.noHpOrtu').value;
//   let jenisKelamin = document.querySelector('.gender').value;
//   for (let i = 0; i <2 ; i++){
//     console.log(nik[i],nama[i],alamat[i],noTelp[i],noTelpOrtu[i],jenisKelamin[i]);
//   }
//   const tambahPendaki = async () => {
//     const idGrup = await tambahGrup()
//     const data = await axios
//       .post(`http://127.0.0.1:8000/api/tambah-pelanggan`, {
//         grup_id: idGrup,
//         nik: nik,
//         nama: nama,
//         alamat: alamat,
//         no_telp: noTelp,
//         no_telp_orgtua: noTelpOrtu,
//         jenis_kelamin: jenisKelamin,
//       })
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch((error) => console.log(error));
//     return data;
//   };
//   tambahPendaki();
// }
</script>

<template>
  <main id="main" tabindex="0">
    <h2 tabindex="0">Daftar Pendakian Gunung</h2>

    <div class="tanggal-container">
      <form action="">
        <label for="" tabindex="0">Tanggal Berangkat</label>
        <input
          class="input-berangkat"
          type="date"
          v-model="formsPendakian.berangkat"
          required
        />
        {{ berangkat }}
        <label for="" tabindex="0">Tanggal Pulang</label>
        <input
          class="input-pulang"
          type="date"
          v-model="formsPendakian.pulang"
          required
        />
        {{ pulang }}
        <label for="" tabindex="0">Pilih Jalur</label>
        <div class="select">
          <select
            class="jalur"
            name="jalur"
            id="jalur"
            v-model="formsPendakian.jalur"
            required
          >
            <option value="1">Kledung</option>
            <option value="2">Alang-Alang Sewu</option>
            <option value="3">Ndoro Arum</option>
            <option value="4">Sigedang</option>
            <option value="5">Bansari</option>
          </select>
        </div>
        {{ jalur }}
      </form>
      <div class="alert-required"></div>
    </div>
    <h2 tabindex="0">Informasi Pendaki</h2>
    <button
      class="add-button"
      @click="addForm"
      tabindex="0"
      aria-label="Masukan biodata pendaki"
    >
      <i class="fa-solid fa-user-plus"></i>Pendaki
    </button>
    <div class="alert-tambah-pendaki"></div>
    <div class="biodata-container">
      <form-biodata
        @formChanges="(n) => callback(form.id, n)"
        :foo.sync="form"
        v-for="form in forms"
      ></form-biodata>
    </div>
    <button
      @click.prevent="checkForms()"
      type="submit"
      tabindex="0"
      aria-label="Selesai Mendaftar"
    >
      <i class="fa-solid fa-circle-check"></i>Selesai
    </button>
    <div class="modal-container"></div>
  </main>
</template>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Ms+Madi&family=Quicksand:wght@300&family=Rock+Salt&display=swap");

main {
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  margin: 80px auto 0 auto;
  gap: 10px;
  min-height: 100vh;
  h2 {
    font-family: "Quicksand", sans-serif;
    margin: 25px 0 15px;
  }
  .tanggal-container {
    background-color: #dbdffd;
    border-radius: 20px;
    form {
      display: flex;
      gap: 10px;
      flex-direction: column;
      padding: 30px 20px;
      label {
        font-family: "Quicksand", sans-serif;
        font-weight: 800;
        font-size: 20px;
        margin: 10px 0;
        color: black;
      }
      input {
        font-family: "Quicksand", sans-serif;
        font-weight: 800;
        font-size: 18px;
        padding: 10px;
        border-radius: 8px;
      }
      select {
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        appearance: none;
        outline: 0;
        box-shadow: none;
        border: 0 !important;
        background: white;
        background-image: none;
        flex: 1;
        padding: 0 0.5em;
        color: black;
        cursor: pointer;
        font-size: 1em;
        font-family: "Quicksand", sans-serif;
        font-weight: 800;
      }
      select::-ms-expand {
        display: none;
      }
      .select {
        position: relative;
        display: flex;
        height: 2.5em;
        line-height: 2.5em;
        background: #5c6664;
        overflow: hidden;
        border-radius: 0.25em;
        border-radius: 8px;
      }
      .select::after {
        content: "\25BC";
        position: absolute;
        top: 0;
        right: 0;
        padding: 0 1em;
        background-color: #ca82ff;
        cursor: pointer;
        pointer-events: none;
        transition: 0.25s all ease;
      }
      .select:hover::after {
        color: #fbcb0a;
      }
    }
  }
  .biodata-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 15px;
    margin: 15px 0 30px 0;
    border-radius: 20px;
    form {
      display: flex;
      gap: 10px;
      flex-direction: column;
      padding: 20px 20px;
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
  .fa-solid {
    margin-right: 6px;
  }
  .add-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    width: 130px;
    height: 44px;
    font-weight: 800;
    background-color: white;
  }
  .add-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    opacity: 1;
    background-color: #f7d716;
  }
  button {
    background-color: white;
    color: #050b38;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    font-family: "Quicksand", sans-serif;
    font-size: 20px;
    font-weight: 800;
    opacity: 0.8;
  }
  button:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    opacity: 1;
    background-color: #83bd75;
  }

  button:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
}
@media only screen and (max-width: 600px) {
  main {
    width: 100%;
    .tanggal-container {
      form {
        .select {
          width: 60%;
        }
      }
    }
  }
}
@media only screen and (min-width: 768px) {
  main {
    width: 100%;
    .biodata-container {
      grid-template-columns: repeat(1, 1fr);
    }
    .tanggal-container {
      form {
        .select {
          width: 40%;
        }
      }
    }
  }
}
@media only screen and (min-width: 1020px) {
  main {
    width: 80%;
    margin-top: 70px;
    .biodata-container {
      grid-template-columns: repeat(2, 1fr);
    }
    .tanggal-container {
      form {
        .select {
          width: 40%;
        }
      }
    }
  }
}
@media only screen and (min-width: 1200px) {
  main {
    .biodata-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
