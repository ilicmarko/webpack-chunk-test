<template>
  <div id="app">
    <h1>Welcome Home</h1>
    <nav>
      <router-link :to="{ name: 'page1'}">Page 1</router-link>
      <router-link :to="{ name: 'page2'}">Page 2</router-link>
      <router-link :to="{ name: 'page3'}">Page 3</router-link>
    </nav>

    <router-view />
  </div>
</template>
