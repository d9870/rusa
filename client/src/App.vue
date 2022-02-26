<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.dropdown-item:hover{
  background-color: #54a0ff;
  cursor: pointer;
  color: white;
  font-weight: bold;
}
.about .program{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.about .program .content{
  width: 30%;
}
</style>
