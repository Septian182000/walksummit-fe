<script setup>
const props = defineProps(["foo"]);
import { reactive } from "@vue/reactivity";

const form = reactive({
  id: props.foo.id,
  nik: "",
  nama: "",
  gender: "",
  alamat: "",
  noHp: "",
  noHpOrtu: "",
});
</script>

<template>
  <form class="form-biodata" action="">
    <h2>Biodata</h2>
    <div class="input_style">
      <input
        class="input_style__input"
        type="number"
        placeholder=" "
        v-model="form.nik"
        @input="$emit('formChanges', form)"
      />
      <label for="" class="input_style__label">NIK</label>
    </div>
    <div class="input_style">
      <input
        class="input_style__input"
        type="text"
        placeholder=" "
        v-model="form.nama"
        @input="$emit('formChanges', form)"
      />
      <label for="" class="input_style__label">Nama</label>
    </div>
    <div class="input_style">
      <input
        class="input_style__input"
        type="text"
        placeholder=" "
        v-model="form.alamat"
        @input="$emit('formChanges', form)"
      />
      <label for="" class="input_style__label">Alamat</label>
    </div>
    <div class="input_style">
      <input
        class="input_style__input"
        type="number"
        placeholder=" "
        v-model="form.noHp"
        @input="$emit('formChanges', form)"
      />
      <label for="" class="input_style__label">No.Hp</label>
    </div>
    <div class="input_style">
      <input
        class="input_style__input"
        type="number"
        placeholder=" "
        v-model="form.noHpOrtu"
        @input="$emit('formChanges', form)"
      />
      <label for="" class="input_style__label">No.Kerabat</label>
    </div>
    <label for="" class="title-gender">Jenis kelamin</label>
    <div class="radio-button">
      <div>
        <input
          type="radio"
          name="gender"
          value="L"
          id="pria"
          v-model="form.gender"
          @input="$emit('formChanges', form)"
        />
        <label for="">Pria</label>
      </div>

      <div>
        <input
          type="radio"
          name="gender"
          value="P"
          id="wanita"
          v-model="form.gender"
          @input="$emit('formChanges', form)"
        />
        <label for="">Wanita</label>
      </div>
    </div>
  </form>
</template>

<style scoped lang="scss">
form {
  display: flex;
  margin: 8px 8px;
  flex-direction: column;
  border-radius: 10px;
  border: 2px solid black;
  background-color: white;
  h2{
    font-family: "Quicksand", sans-serif;
  }
  .input_style {
    position: relative;
    width: 100%;
    height: 3rem;
    margin: 6px 0;
    &__input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid black;
      border-radius: 10px;
      font-family: "Quicksand", sans-serif;
      font-size: inherit;
      font-weight: 800;
      color: black;
      outline: none;
      padding: 1rem;
      &:hover {
        border-color: black;
      }
      &:focus {
        border-color: #1a73e8;
      }
    }
    &__label {
      position: absolute;
      left: 1rem;
      top: 0.8rem;
      padding: 0 2px;
      color: #8d8daa;
      cursor: text;
      transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
      background-color: white;
    }
  }
  .input_style__input:focus ~ .input_style__label,
  .input_style__input:not(:placeholder-shown).input_style__input:not(:focus)
    ~ .input_style__label {
    top: -0.5rem;
    font-size: 0.8rem;
    left: 0.8rem;
  }
  .title-gender {
    font-weight: 800;
    font-family: "Quicksand", sans-serif;
  }
  .radio-button {
    display: flex;
    gap: 10px;
    input{
      margin-right: 6px;
      margin-left: 6px;
    }
    label {
      font-family: "Quicksand", sans-serif;
      font-weight: 800;
    }
  }
}
</style>
