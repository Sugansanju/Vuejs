<template>
    <div class="signup">

        <!-- Navigation -->
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
        <!-- <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
     <ul class="navbar-nav">
         <li class="nav-item active">
           <a class="nav-link link" href="#/home"> HOME</a>
         </li>
     </ul>
         <ul class="nav navbar-nav navbar-right">
         <li class="nav-item active">
           <a class="nav-link link" href="#/Signup">signup</a>
         </li>
         <li class="nav-item active">
           <a class="nav-link link" href="#/Signin">Signin</a>
         </li>
     </ul>
   </nav> -->
   <div class="col-md-offset-8">
<form >
<hgroup>
  <h2>Signup</h2>
</hgroup>
  <div class="group">
    <input type="text" required><span class="highlight"></span><span class="bar"></span>
    <label>First name</label>
  </div>
<div class="group">
    <input type="email" required><span class="highlight"></span><span class="bar"></span>
    <label>Email</label>
  </div>
<div class="group">
    <input type="text" required><span class="highlight"></span><span class="bar"></span>
    <label>Mobile no</label>
  </div>
<div class="group">
    <input type="password" required><span class="highlight"></span><span class="bar"></span>
    <label>Password</label>
  </div>
  <button type="submit" class="button"style="background-color:#7B68EE;">Signup
    <div class="ripples buttonRipples"><span class="ripplesCircle"></span></div>
  </button>
</form>
</div><section id="lab_social_icon_footer">
<!-- Include Font Awesome Stylesheet in Header -->
<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
<div class="container">
        <div class="text-center center-block">
                <a href="https://www.facebook.com"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a>
	            <a href="https://twitter.com"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a>
	            <a href="https://plus.google.com"><i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i></a>
  <a href="https://www.instagram.com/?hl=en"><i id="social-insta" class="fa fa-instagram fa-3x social"></i></a>
    </div>
</div>
</section>
<!-- <div class="container">
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
</div> -->
</div>
</template>
<style>
.link{
    color:#fff;
}
*{ box-sizing:border-box; }

body {
	font-family: Helvetica;
	background: #eee;
  -webkit-font-smoothing: antialiased;
}

hgroup {
	text-align:center;
}

h1, h3 { font-weight: 300; }

h1 { color: #636363; }

h3 { color: #4a89dc; }

form {
	width: 550px;
	margin: 4em auto;
	padding: 3em 2em 2em 2em;
	background: #fafafa;
	border: 1px solid #ebebeb;
	box-shadow: rgba(0,0,0,0.14902) 0px 1px 1px 0px,rgba(0,0,0,0.09804) 0px 1px 2px 0px;
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
	color: #636363;
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
  color: #e4405f;
}
/*  */
</style>
<script>
export default {
    name:'signup'
}
</script>
