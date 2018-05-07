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
        <nav class="navbar navbar-expand-lg navbar-dark" style="background-color:#7B68EE;">
  <a class="navbar-brand" href="#/home">
      <img src="../assets/logo.png" style="max-width:35px; margin-top: -7px;" alt="">
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="nav justify-content-end">
    <b><h5><li class="nav-item">
            <a class="nav-link link" href="#/SignIn">Signin <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link link" href="#/SignUp">Signup</a>
        </li>
        <li class="nav-item dropdown ">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Login as
       </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#/Teacher">Teacher</a>
          <a class="dropdown-item" href="#">Student</a>
          <a class="dropdown-item" href="#">Parent</a>
        </div>
        </li></h5></b>
        </ul>
  </div>
  </nav>
 <form>
  <div class="group">
  <h2>LOGIN</h2>
</div>
  <div class="group">
    <input type="email" required>
    <span class="highlight">
    </span>
    <label>
        Email
    </label>
  </div>
  <div class="group">
      <input type="password" required><span class="highlight"></span>
      <!-- <span class="bar"></span> -->
      <label>Password</label>
    </div>
    <a href="#/Teacher" class="btn link"style="background-color:#7B68EE;" >Login</a>

 <a class="" href="#">
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
.link{
    color:#fff;
}
.nav{
    background-color:#7B68EE;
}

body {
	font-family: Palatino Linotype;
	background: #eee;
  -webkit-font-smoothing: antialiased;
}

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
input:focus { outline: none; }
/* Label */
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
/* active */
input:focus ~ label, input.used ~ label {
	top: -20px;
  transform: scale(.75); left: -2px;
	/* font-size: 14px; */
	color: #4a89dc;
}
/* Underline */
.bar {
	position: relative;
	display: block;
	width: 100%;
}
.bar:before, .bar:after {
	content: '';
	height: 2px;
	width: 0;
	bottom: 1px;
	position: absolute;
	background: #4a89dc;
	transition: all 0.2s ease;
}
.bar:before { left: 50%; }
.bar:after { right: 50%; }
/* active */
input:focus ~ .bar:before, input:focus ~ .bar:after { width: 50%; }
/* Highlight */
.highlight {
	position: absolute;
	height: 60%;
	width: 100px;
	top: 25%;
	left: 0;
	pointer-events: none;
	opacity: 0.5;
}
/* active */
input:focus ~ .highlight {
	animation: inputHighlighter 0.3s ease;
}
/* Animations */
@keyframes inputHighlighter {
	from { background: #4a89dc; }
	to 	{ width: 0; background: transparent; }
}
/* Button */
.button {
  position: relative;
  display: inline-block;
  padding: 12px 24px;
  margin: .3em 0 1em 0;
  width: 100%;
  vertical-align: middle;
  color: #fff;
  font-size: 16px;
  line-height: 20px;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  letter-spacing: 1px;
  background: transparent;
  border: 0;
  border-bottom: 2px solid #3160B6;
  cursor: pointer;
  transition: all 0.15s ease;
}
.button:focus { outline: 0; }
/* Button modifiers */
.buttonBlue {
  background: #4a89dc;
  text-shadow: 1px 1px 0 rgba(39, 110, 204, .5);
}
.buttonBlue:hover { background: #357bd8; }
/* Ripples container */
.ripples {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: transparent;
}
/* Ripples circle */
.ripplesCircle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
}
.ripples.is-active .ripplesCircle {
  animation: ripples .4s ease-in;
}
/* Ripples animation */
@keyframes ripples {
  0% { opacity: 0; }
  25% { opacity: 1; }
  100% {
    width: 200%;
    padding-bottom: 200%;
    opacity: 0;
  }
}
footer { text-align: center; }
footer p {
	color: #888;
	font-size: 13px;
	letter-spacing: .4px;
}
footer a {
	color: #4a89dc;
	text-decoration: none;
	transition: all .2s ease;
}
footer a:hover {
	color: #666;
	text-decoration: underline;
}
footer img {
	width: 80px;
	transition: all .2s ease;
}
footer img:hover { opacity: .83; }
footer img:focus , footer a:focus { outline: none; }
#lab_social_icon_footer {
  padding: 40px 0;
  background-color: #dedede;
}
#lab_social_icon_footer a {
  color: #333;
}
#lab_social_icon_footer .social:hover {
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -o-transform: scale(1.1);
}
#lab_social_icon_footer .social {
  -webkit-transform: scale(0.8);
  /* Browser Variations: */
  -moz-transform: scale(0.8);
  -o-transform: scale(0.8);
  -webkit-transition-duration: 0.5s;
  -moz-transition-duration: 0.5s;
  -o-transition-duration: 0.5s;
}
/*
    Multicoloured Hover Variations
*/
#lab_social_icon_footer #social-fb:hover {
  color: #3B5998;
}
#lab_social_icon_footer #social-tw:hover {
  color: #4099FF;
}
#lab_social_icon_footer #social-gp:hover {
  color: #d34836;
}
#lab_social_icon_footer #social-insta:hover {
  color:#e4405f;
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
