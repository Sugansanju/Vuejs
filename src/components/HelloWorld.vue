<template>
  <div class="hello">
      <nav class="nav navbar-expand-lg navbar-dark">
<a class="nav" href="#/home">
    <img src="../assets/logo.png" style="max-width:35px; margin-top: -2px;" alt="">
</a>
  <ul class="nav justify-content-end">

      <li class="nav-item">
          <a class="nav-link link ex1" href="#/SignIn">Signin
              <span class="sr-only">(current)</span>
          </a>
      </li>
      <li class="nav-item">
          <a class="nav-link link ex1" href="#/SignUp">Signup</a>
      </li>
      <li class="nav-item dropdown ">
          <a class="nav-link dropdown-toggle link ex1" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Login as
     </a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
        <a class="dropdown-item ex1" href="#/Teacher">Teacher</a>
        <a class="dropdown-item ex1" href="#">Student</a>
        <a class="dropdown-item ex1" href="#">Parent</a>
      </div>
      </li>
      </ul>
</nav>
<div class="container">
    <div class="row">
  <div class="col-md-6 py-5">
      <div class="vue-image">
      <img src="../assets/vuejs.png" style="max-width:350px; margin-top:190px;">
  </div>
</div>
<div class="col-md-6 py-5 centered-content" style="margin-top:250px;">
    <h1>
    <strong><font >Overview Of Vue.js</font></strong>
</h1>
    <p><font color="#0B5345"><h5>Vue.js is a popular JavaScript front-end framework that was built to organize and simplify web development.
    </h5></font></p>
</div>
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
body {
	font-family: Palatino Linotype;
	background: #eee;
  -webkit-font-smoothing: antialiased;
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
