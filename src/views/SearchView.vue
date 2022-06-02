<script setup></script>

<template>
  <main>
    <h2>Search Grup Pendaki</h2>
    <form action="">
      <label for="idsearch">Cari Id Grup:</label>
      <input
        type="search"
        id="idsearch"
        name="idsearch"
        placeholder="Search.."
      />
    </form>
    <div class="search-button-container">
      <button type="submit" class="btn btn-white btn- animate">Search</button>
    </div>

    <div id="hasil-search-container">
      <h2>Hasil Search Grup Pendaki</h2>
      <div id="list-grup">
        <p>Id Grup: 002</p>
        <p>Nama Koordinator: 002</p>
        <p>Status Pembayaran: Diterima</p>
        <p>Jalur: 002</p>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  margin-top: 80px;
  gap: 10px;
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    label {
      font-size: medium;
      font-weight: bold;
    }
    input {
      padding: 5px;
      border-radius: 10px;
    }
  }
  .search-button-container {
    display: flex;
    justify-content: center;
    button {
      padding: 5px 20px;
      border-radius: 10px;
      font-weight: bold;
    }

    .btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    .btn:active {
      transform: translateY(-1px);
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }

    .btn-white {
      background-color: rgb(146, 198, 254);
      color: #ffff;
    }

  }
  #hasil-search-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    #list-grup {
      padding: 10px;
      border-radius: 10px;
      background-color: #DBDFFD;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
      font-size: medium;
      font-weight: bold;
    }
  }
}
@media only screen and (min-width: 768px) {
}
@media only screen and (min-width: 1020px) {
  main {
    margin-top: 70px;
  }
}
@media only screen and (min-width: 1200px) {
}
</style>
