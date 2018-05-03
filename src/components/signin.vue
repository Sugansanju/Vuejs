<template>
    <div class="signin">
<nav class="navbar navbar-expand-sm bg-primary">
  <ul class="navbar-nav">
    <li class="nav-item active">
      <a class="nav-link" href="#"> <router-link to="/home">HOME</router-link></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#/home">Link</a>
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
        <div class="row justify-content-md-center py-5">
        <div class="col-sm-6">
            <div class="card">
              <div class="card-header bg-primary"><h4>Signin</h4></div>
              <div class="card-content">
                  <form  class="form-horizontal py-5">
                      <div  class="form-group">
                          <div class="col-md-6 offset-md-3">
                          <input  type="text" placeholder="Email Address" class="form-control">
                      </div>
                   </div>
                   <div  class="form-group">
                       <div class="col-md-6 offset-md-3">
                       <input  type="text" placeholder="Mobile number" class="form-control">
                   </div>
                </div>
                <div  class="form-group">
                    <div class="col-md-6 offset-md-3">
                        <input  type="password" placeholder="Password" class="form-control">
                     </div>
                 </div>
                 <div class="form group">
                 <label for="role" selected="selected" class="col-md-4 offset-md-3 control-label"><b>Role</b></label>
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
                   <div class="col-md-8  col-md-offset-4">
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
        <footer class="page-footer font-small indigo pt-0">

        <!--Footer Links-->
        <div class="container">

            <!--First row-->
            <div class="row">

                <!--First column-->
                <div class="col-md-12 py-5">

                    <div class="mb-5 flex-center text-center">

                        <!--Facebook-->
                        <a class="fb-ic">
                            <i class="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>
                        <!--Twitter-->
                        <a class="tw-ic">
                            <i class="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>
                        <!--Google +-->
                        <a class="gplus-ic">
                            <i class="fa fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>
                        <!--Linkedin-->
                        <a class="li-ic">
                            <i class="fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>
                        <!--Instagram-->
                        <a class="ins-ic">
                            <i class="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>
                        <!--Pinterest-->
                        <a class="pin-ic">
                            <i class="fa fa-pinterest fa-lg white-text fa-2x"> </i>
                        </a>
                    </div>
                </div>
                <!--/First column-->
            </div>
            <!--/First row-->
        </div>
        <!--/Footer Links-->

    </footer>
    <!--/Footer-->
    </div>

</template>
<script>
export default {
    name:'signin'
}
</script>
