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
    const data = await axios
      .post(`http://127.0.0.1:8000/api/tambah-grup`, {
        jalur_id: jalur,
        tgl_brangkat: berangkat,
        tgl_pulang: pulang,
      })
      .then(function (response) {
        return response.data.data.id;
      })
      .catch((error) => console.log(error));
    return data;
  };
  tambahGrup();

  const anggota = forms.map((form) => ({
    nik: form.nik,
    alamat: form.alamat,
    nama: form.nama,
    alamat: form.alamat,
    no_telp: form.noHp,
    no_telp_orgtua: form.noHpOrtu,
    jenis_kelamin: form.gender,
  }));

  // const formYangAkanDiSubmit = {
  //   anggota: anggota,
  // }

  const stringJSON = JSON.stringify(anggota);
  const objectBiasa = JSON.parse(stringJSON);

  const tambahPendaki = async () => {
    const idGrup = await tambahGrup();
    objectBiasa.forEach(async (object) => {
      const data = await axios
        .post(`http://127.0.0.1:8000/api/tambah-pelanggan`, {
          grup_id: idGrup,
          nik: object.nik,
          nama: object.nama,
          alamat: object.alamat,
          no_telp: object.no_telp,
          no_telp_orgtua: object.no_telp_orgtua,
          jenis_kelamin: object.jenis_kelamin,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch((error) => console.log(error));
      return data;
    });
  };
  tambahPendaki();
}

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
  <main>
    <h2>Daftar Pendakian Gunung</h2>

    <div class="tanggal-container">
      <form action="">
        <label for="">Tanggal Berangkat</label>
        <input
          class="input-berangkat"
          type="date"
          v-model="formsPendakian.berangkat"
        />
        {{ berangkat }}
        <label for="">Tanggal Pulang</label>
        <input
          class="input-pulang"
          type="date"
          v-model="formsPendakian.pulang"
        />
        {{ pulang }}
        <label for="">Pilih Jalur</label>
        <select
          class="jalur"
          name="jalur"
          id="jalur"
          v-model="formsPendakian.jalur"
        >
          <option value="1">jalur1</option>
          <option value="2">jalur2</option>
          <option value="3">jalur3</option>
          <option value="4">jalur4</option>
          <option value="5">jalur5</option>
        </select>
        {{ jalur }}
      </form>
    </div>
    <h2>Biodata Pendaki</h2>
    <button class="add-button" @click="addForm">Tambah Pendaki</button>
    <div class="biodata-container">
      <form-biodata
        @formChanges="(n) => callback(form.id, n)"
        :foo.sync="form"
        v-for="form in forms"
      ></form-biodata>
    </div>
    <button @click.prevent="checkForms()" type="submit">Submit</button>
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  margin-top: 80px;
  gap: 10px;
  .tanggal-container {
    background-color: #dbdffd;
    border-radius: 10px;
    form {
      display: flex;
      gap: 10px;
      flex-direction: column;
      padding: 10px 20px;
      input {
        padding: 5px;
      }
      select {
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
    background-color: rgb(189, 209, 255);
    color: #050b38;
    padding: 10px;
    border-radius: 10px;
    font-size: medium;
    font-weight: bold;
    opacity: 0.8;
  }
  button:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    opacity: 1;
    background-color: aquamarine;
  }

  button:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
}
@media only screen and (min-width: 768px) {
  main {
    .biodata-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
@media only screen and (min-width: 1020px) {
  main {
    margin-top: 70px;
    .biodata-container {
      grid-template-columns: repeat(2, 1fr);
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
