<template>
  <div class="hello">
      <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
   <ul class="navbar-nav">
     <li class="nav-item active">
       <a class="nav-link"> <router-link to="/home">HOME</router-link></a>
     </li>
     <li class="nav-item">
       <a class="nav-link" href="#">Link</a>
     </li>
     <li class="nav-item">
       <a class="nav-link" href="#">Link</a>
     </li>
     <li class="nav-item">
       <a class="nav-link disabled" href="#">Disabled</a>
     </li>
   </ul>
   <ul class="nav navbar-nav navbar-right">
 <li><router-link to="/SignUp"><span class="glyphicon glyphicon-user"></span> Sign Up</a></router-link></li>
 <li><router-link to="/SignIn"><span class="glyphicon glyphicon-log-in"></span>Sign In </a></router-link></li>
 </ul>
 </nav>
<div class="container">
<div class="jumbotron">
<h1 class="text-center">Vue.js</h1>

</div>
</div>

</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
