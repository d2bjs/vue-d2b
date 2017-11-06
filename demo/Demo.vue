<template>
  <div id = 'demo'>
    <h1>
      <img :src="require('../static/logo-vue.png')" />
      <img :src="require('../static/logo-d2b.png')" />
    </h1>
    <h2>
      Try out the different d2b.js charts built with vue components.
    </h2>

    <div class = 'links'>
      <router-link :to = '{name: "axis" }'>Axis Chart</router-link>
      <router-link :to = '{name: "pie" }'>Pie Chart</router-link>
      <router-link :to = '{name: "sankey" }'>Sankey Chart</router-link>
      <router-link :to = '{name: "sunburst" }'>Sunburst Chart</router-link>
      <router-link :to = '{name: "generator" }'>Generator</router-link>
      <a href = 'https://github.com/d2bjs/vue-d2b'>Github</a>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
  export default { }
</script>

<style>
  #demo {
    padding: 100px 0px;
  }

  h1,
  h2 {
    color: #333;
    margin: 0;
    text-align: center;
    padding-bottom: 30px;
  }

  h1 {
    color: #444;
    white-space: nowrap;
  }

  h2 {
    font-weight: normal;
  }

  img {
    height: 150px;
  }

  @media only screen and (max-width : 750px) {
    #demo {
      padding: 100px 0px;
    }

    img {
      height: 90px;
    }
  }

  a {
    padding: 10px;
    border: 1px solid black;
    border-radius: 2em;
    padding: 0.75em 2em;
    background: white;
    text-decoration: none;
    color: #4fc08d;
    border: 1px solid #4fc08d;
    transition: all 0.15s ease;
    font-family: 'Arial';
    margin: 0px 10px;
    display: inline-block;
    margin-top: 30px;
    width: 140px;
  }

  a.router-link-exact-active {
    background-color: #4fc08d;
    color: white;
  }

  .links {
    text-align: center;
  }
</style>
