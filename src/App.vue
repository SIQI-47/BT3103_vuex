<template>
  <div id="app">
    <Header></Header>

    <div id="content">
      <br>
      <router-view></router-view>
    </div>
    
    <div id="footer">
    <Footer></Footer>
    </div>

    <div id="bottom">
    </div>
 </div>

</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>

header {
  padding: 10px;
}

.topnav {
  float: left;
  overflow: hidden;
  background-color: black;
}

ul {
  float: left;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  position: sticky;
}

li {
  float: left;
  display: inline;
  border-right: 1px solid #bbb;
}

li a{
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #111;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: rgb(159, 227, 159);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #02305e;
  margin-top: 0px;
  border: none;
}

#content {
  float: bottom;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 40px;
  padding-bottom: 20px;
  background-color: white;
  border: none;
}

#map {
  height: 100%;
}

#footer { 
  background-color: rgb(125, 194, 156);
  height: 160px;
  padding: 10px;
  border: none;
}
#bottom {
  background-color: seagreen;
  height: 30px;
  border: none;
  padding: 10px;
}
</style>
