<template>
  <div class="hello">
          <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand"><router-link to="/Home">HOME</router-link></a>
          </div>

        <ul class="nav navbar-nav navbar-right">
      <li><router-link to="/SignUp"><span class="glyphicon glyphicon-user"></span> Sign Up</a></router-link></li>
      <li><router-link to="/SignIn"><span class="glyphicon glyphicon-log-in"></span>Sign In </a></router-link></li>
    </ul>

  </div>
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
