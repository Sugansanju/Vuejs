<template>
    <div>
        <!-- <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color:#7B68EE;">
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
        </nav> -->
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
 <form>
  <hgroup>
  <h2>LOGIN</h2>
</hgroup>
  <div class="group">
    <input type="email" required>
    <span class="highlight">
    </span>
    <label class="group-label">
        Email
    </label>
  </div>
  <div class="group">
      <input type="password" required><span class="highlight"></span>
      <!-- <span class="bar"></span> -->
      <label class="group-label">Password</label>
    </div>
    <a href="#/Teacher" class="btn link ex2">Login</a>

 <a class="" style="color:red;" href="#">
     Forgot Password?
 </a>
</form>
<section id="lab_social_icon_footer">
<!-- Include Font Awesome Stylesheet in Header -->
<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
<div class="container">
        <div class="text-center center-block">
                <a href="https://www.facebook.com/bootsnipp"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a>
	            <a href="https://twitter.com/bootsnipp"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a>
	            <a href="https://plus.google.com/+Bootsnipp-page"><i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i></a>
	           <a href="https://www.instagram.com/?hl=en"><i id="social-insta" class="fa fa-instagram fa-3x social"></i></a>
    </div>
</div>
</section>
      <!-- <div class="container">
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
                 <label for="role" selected="selected" class="col-md-8 offset-md-3 control-label"><b>Role</b>
                     <label class="radio-inline">
                         <input type="radio" name="role" value="Teacher" checked="checked">Teacher
                    </label>
                    <label class="radio-inline">
                        <input type="radio" name="role" value="Parent" checked="checked">Parent
                    </label>
                     <label class="radio-inline">
                         <input type="radio" name="role" value="Student" checked="checked">Student
                     </label>
                  </label>
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
        <div class="container">
            First row-->
            <!-- <div class="row">
                <div class="col-md-12 py-5">
                    <div class="mb-5 flex-center text-center">
                        <a class="fb-ic">
                            <i class="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>
                        <a class="tw-ic">
                            <i class="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>
                        <a class="gplus-ic">
                            <i class="fa fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>
                        <a class="li-ic">
                            <i class="fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>
                        <a class="ins-ic">
                            <i class="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>
                        <a class="pin-ic">
                            <i class="fa fa-pinterest fa-lg white-text fa-2x"> </i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
     -->
    </div>

</template>
<style>
.group {
	position: relative;
	margin-bottom: 45px;
}
input {
	font-size: 18px;
	padding: 10px 10px 10px 5px;
	-webkit-appearance: none;
	display: block;
	background: #fafafa;
	color: #010101;
	width: 100%;
	border: none;
	border-radius: 0;
	border-bottom: 1px solid #757575;
}

label {
	color: #999;
	font-size: 18px;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 5px;
	top: 10px;
	transition: all 0.2s ease;
}

</style>
<script>
export default {
    name:'signin'
}
$(window, document, undefined).ready(function() {
  $('input').blur(function() {
    var $this = $(this);
    if ($this.val())
      $this.addClass('used');
    else
      $this.removeClass('used');
  });
  var $ripples = $('.ripples');
  $ripples.on('click.Ripples', function(e) {
    var $this = $(this);
    var $offset = $this.parent().offset();
    var $circle = $this.find('.ripplesCircle');
    var x = e.pageX - $offset.left;
    var y = e.pageY - $offset.top;
    $circle.css({
      top: y + 'px',
      left: x + 'px'
    });
    $this.addClass('is-active');
  });
  $ripples.on('animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd', function(e) {
  	$(this).removeClass('is-active');
  });
});
</script>
