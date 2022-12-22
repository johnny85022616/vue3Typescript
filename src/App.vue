<template>
  <nav>
    <router-link to="/">TypeScript</router-link>
      <h1>function</h1>
      <router-link to="/function">function</router-link>|
      <router-link to="/optionalParameters">optionalParameters</router-link>|
      <router-link to="/defaultParameters">defaultParameters</router-link>|
      <router-link to="/restParameters">restParameters</router-link>|
      <router-link to="/functionOverloadings">functionOverloadings</router-link>|
      <h1>Generics</h1>
      <router-link to="/generics">generics</router-link>|
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
