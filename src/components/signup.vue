<template>
    <div class="signup"><nav class="navbar navbar-inverse">
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
<div data-v-60b78f86="" class="col-md-8 col-md-offset-2">
    <div data-v-60b78f86="" class="panel panel-default login-page">
        <div data-v-60b78f86="" class="panel-heading">Register</div>
         <div data-v-60b78f86="" class="panel-body">
             <form data-v-60b78f86=""  class="form-horizontal">
                 <div data-v-60b78f86="" class="form-group"><div data-v-60b78f86="" class="col-md-6 col-md-offset-3 login-input">
                     <input data-v-60b78f86="" type="text" placeholder="Email/Mobile Number" class="form-control">
                      <div data-v-60b78f86="">
                          <p data-v-60b78f86="" class="help-block"></p>
                      </div>
                      <div data-v-60b78f86=""></div>
                      <div data-v-60b78f86="">
                          <p data-v-60b78f86="" class="help-block"></p>
                      </div>
                      <div data-v-60b78f86="">
                          <p data-v-60b78f86="" class="help-block"></p>
                      </div>
                  </div>
              </div>
               <div data-v-60b78f86="" class="form-group">
                   <div data-v-60b78f86="" class="col-md-6  col-md-offset-3 login-input">
                       <input data-v-60b78f86="" type="password" placeholder="Password" class="form-control">
                        <div data-v-60b78f86="">
                            <p data-v-60b78f86="" class="help-block"></p>
                        </div>
                    </div>
                </div>
                <div data-v-60b78f86="" class="form-group">
                    <div data-v-60b78f86="" class="col-md-6 col-md-offset-4">
                        <div data-v-60b78f86="" class="checkbox">
                            <label data-v-60b78f86="">
                                <input data-v-60b78f86="" type="checkbox" name="remember"> Remember Me
                          </label>
                      </div>
                  </div>
              </div>
              <div data-v-60b78f86="" class="form-group">
                  <div data-v-60b78f86="" class="col-md-8 col-md-offset-4">
                      <button data-v-60b78f86="" type="submit" class="btn btn-primary">
                            Login
                        </button>
                        <a data-v-60b78f86="" href="" class="btn btn-link">
                        Forgot Your Password?
                    </a>
                    </div>
                    <div data-v-60b78f86=""href="" class="col-md-2 col-md-offset-4 btn btn-link">
                      <a data-v-60b78f86="" href="" class="btn btn-link">
                        Create a new account
                      </a>
                  </div>
              </div>
          </form>
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
