<template>
  <nav>
    <!-- <router-link to="/">TypeScript</router-link> -->
      <h1>type</h1>
      <router-link to="/typeAssertions">typeAssertions</router-link> |
      <router-link to="/intersectionTypes">intersectionTypes</router-link> |
      <h1>interface</h1>
      <router-link to="/interface">interface</router-link> |
      <h1>function</h1>
      <router-link to="/function">function</router-link> |
      <router-link to="/optionalParameters">optionalParameters</router-link> |
      <router-link to="/defaultParameters">defaultParameters</router-link> |
      <router-link to="/restParameters">restParameters</router-link> |
      <router-link to="/functionOverloadings">functionOverloadings</router-link>
      <h1>Generics</h1>
      <router-link to="/generics">generics</router-link> |
      <router-link to="/genericInterfaces">genericInterfaces</router-link> |
      <router-link to="/genericConstraints">genericConstraints</router-link> 
      <h1>optionApi</h1>
      <router-link to="/optionApi">optionApi</router-link> |
      <h1>compositionApi</h1>
      <router-link to="/compositionApi">compositionApi</router-link> |
      <router-link to="/fetchProduct">fetchProduct</router-link> |
  </nav>
  
  <!-- <router-view /> -->
  <router-view v-slot="{ Component }">
    <Suspense>
        <template #default>
          <component :is="Component"></component>
        </template>
        <template #fallback>
          <h1>Loading...</h1>
        </template>
    </Suspense>
  </router-view>
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
