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
    <label for="">NIK</label>
    <input
      type="number"
      placeholder="NIK"
      v-model="form.nik"
      @input="$emit('formChanges', form)"
    />
    <label for="">Nama</label>
    <input
      type="text"
      placeholder="Full Name"
      v-model="form.nama"
      @input="$emit('formChanges', form)"
    />
    <label for="">Jenis kelamin</label>
    <div class="radio-button">
      <div>
        <input
          type="radio"
          name="gender"
          value="pria"
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
          value="wanita"
          id="wanita"
          v-model="form.gender"
          @input="$emit('formChanges', form)"
        />
        <label for="">Wanita</label>
      </div>
    </div>
    <label for="">Alamat</label>
    <input
      type="text"
      placeholder="Alamat"
      v-model="form.alamat"
      @input="$emit('formChanges', form)"
    />
    <label for="">Nomor Telepon</label>
    <input
      type="number"
      placeholder="No Hp"
      v-model="form.noHp"
      @input="$emit('formChanges', form)"
    />
    <label for="">Nomor Telepon Orang Tua</label>
    <input
      type="number"
      placeholder="Nomor Hp Ortu"
      v-model="form.noHpOrtu"
      @input="$emit('formChanges', form)"
    />
  </form>
</template>

<style scoped lang="scss">
form {
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #DBDFFD;
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
