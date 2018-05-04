<template>
  <div class="hello">
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color:#7B68EE;">
        <div class="container">
          <a class="navbar-brand" href="#/home">
            <img src="../assets/logo.png" style="max-width:35px; margin-top: -7px;" alt="">
          </a>

          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link link" href="#/home">Home
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link" href="#/SignUp">Signup</a>
              </li>
              <li class="nav-item">
                <a class="nav-link link" href="#/SignIn">Signin</a>
              </li>

            </ul>
          </div>
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
<style >

.link{
    color:#fff;
}
.lc{
    color:#fff;
}

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
