<template>
    <div class="signup">
        <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
       <ul class="navbar-nav">
       <li class="nav-item active">
         <a class="nav-link"> <router-link to="/Home">HOME</router-link></a>
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
<div class="fix-bottom">
<div class="col-md-8 col-md-offset-2">
    <div class="panel panel-primary">
      <div class="panel-heading">Signin</div>
      <div class="panel-body">
          <form  class="form-horizontal">
          <div  class="form-group">
              <div class="col-md-6 col-md-offset-2 login-input">
              <input  type="text" placeholder="Email/Mobile number" class="form-control">
          </div>
      </div>
        <div  class="form-group">
            <div class="col-md-6  col-md-offset-2 login-input">
                <input  type="password" placeholder="Password" class="form-control">
             </div>
         </div>
         <div class="form-group">
             <div  class="col-md-6 col-md-offset-4">
                 <div class="checkbox">
                     <label >
                         <input  type="checkbox" name="remember"> Remember Me
                   </label>
               </div>
           </div>
       </div>
       <div  class="form-group">
           <div class="col-md-8 col-md-offset-4">
               <button  type="submit" class="btn btn-primary">
                     Login
                 </button>

             </div>
             <div class="col-md-8 col-md-offset-3 ">
                 <a  href="" class="btn btn-link">
            Create New Account
             </a>
           </div>
           <div class="col-md-8 col-md-offset-3">
               <a  href="" class=" btn btn-link">
               Forgot Your Password?
           </a>
       </div>
       </div>
   </form>
</div>
  </div>
</div>
</div>
</div>
</div>
</template>
<script>
export default {
    name:'signup'
}
</script>
