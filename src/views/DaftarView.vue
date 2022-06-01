<script setup>
import FormBiodata from "../components/FormBiodata.vue";
import { reactive } from "@vue/reactivity";
const emit = defineEmits(["formChanges"]);

const forms = reactive([]);

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
  console.log(forms);
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
        <label for="">Pilih Jalur</label>
        <select name="jalur" id="jalur">
          <option value="jalur1">jalur1</option>
          <option value="jalur2">jalur2</option>
          <option value="jalur3">jalur3</option>
          <option value="jalur4">jalur4</option>
        </select>
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
    <button @click="checkForms" type="submit">Submit</button>
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
      input {
        padding: 5px;
      }
      select{
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
    margin-top: 73px;
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
