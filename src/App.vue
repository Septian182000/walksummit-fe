<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <button arial-label="navigasi" class="hamburger-button">
      <svg
        class="hamburger-icon"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 16 16"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
        />
      </svg>
    </button>
    <div class="container">
      <a class="home" href="/">
        <h1>WalkSummit</h1>
      </a>
    </div>
    <nav id="drawer">
      <ul>
        <li>
          <RouterLink class="nav" to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink class="nav" to="/kuota">Kuota</RouterLink>
        </li>
        <li>
          <RouterLink class="nav" to="/search">Search</RouterLink>
        </li>
        <li>
          <RouterLink class="nav" to="/daftar">Daftar</RouterLink>
        </li>
        <li>
          <RouterLink class="nav" to="/sop">SOP</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  <RouterView />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Ms+Madi&family=Quicksand:wght@300&family=Rock+Salt&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}

header {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 10px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #354259;
  z-index: 99;
  a {
    display: flex;
    align-items: center;
    h1 {
      color: whitesmoke;
    }
  }
  .container {
    display: flex;
    padding: 10px 20px;
    border-radius: 10px;
    flex-direction: column;
    align-items: center;
  }
  .home {
    font-family: "Quicksand", cursive;
    color: black;
    position: relative;
  }
  .home::after {
    position: absolute;
    content: "";
    width: 0%;
    height: 4px;
    background-color: red;
    left: 50%;
    bottom: -10px;
    transition: all 0.4s ease-in-out;
  }
  .container:hover {
    cursor: pointer;
  }
  .container:hover .home::after {
    width: 100%;
    left: 0;
  }

  .hamburger-button {
    padding: 0;
    border: none;
    background: none;
    opacity: 1;
    height: 44px;
    width: 44px;
    .hamburger-icon {
      font-size: 44px;
      color: #5e5a5a;
    }
  }
  #drawer.open {
    transform: translate(0, 0);
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
  }
  nav {
    display: none;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    transform: translate(-250px, 0);
    -webkit-transform: translate(-250px, 0);
    -moz-transform: translate(-250px, 0);
    -ms-transform: translate(-250px, 0);
    -o-transform: translate(-250px, 0);
    transition: transform 0.3s ease-in-out;
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #5e5a5a;

      width: 50%;
      gap: 25px;
      li {
        list-style-type: none;
        a {
          text-decoration: none;
          color: black;
          font-size: 20px;
          font-weight: bold;
        }
      }
    }
  }
  .nav {
    font-family: "Quicksand", cursive;
    color: whitesmoke;
    position: relative;
  }
  .nav::after {
    position: absolute;
    content: "";
    width: 0%;
    height: 4px;
    background-color: red;
    left: 50%;
    bottom: -10px;
    transition: all 0.4s ease-in-out;
  }
  nav:hover {
    cursor: pointer;
  }
  li:hover .nav::after {
    width: 100%;
    left: 0;
  }
}

@media only screen and (min-width: 1024px) {
  header {
    width: 100%;
    padding: 10px 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .hamburger-button {
      display: none;
    }
    a {
      display: flex;
      width: 100%;
      h1 {
        font-size: 24px;
      }
    }
    nav {
      display: inherit;
      position: relative;
      height: 100%;
      transform: translate(0, 0);
      -webkit-transform: translate(0, 0);
      -moz-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
      -o-transform: translate(0, 0);
      ul {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        background-color: #354259;
      }
    }
  }
}
</style>
