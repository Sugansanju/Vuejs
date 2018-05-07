<template>
    <div class="signup">
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
   <div class="col-md-offset-8">
<form>
<hgroup>
  <h2>Signup</h2>
</hgroup>
  <div class="group">
    <input type="text" required><span class="highlight"></span>
    <!-- <span class="bar"></span> -->
<label class="group-label">Name</label>
  </div>
<div class="group">
    <input type="email" required><span class="highlight"></span>
    <!-- <span class="bar"></span> -->
    <label class="group-label">Email</label>
  </div>
<div class="group">
    <input type="text" required><span class="highlight"></span>
    <!-- <span class="bar"></span> -->
    <label class="group-label">Mobile no</label>
  </div>
<div class="group">
    <input type="password" required><span class="highlight"></span>
    <!-- <span class="bar"></span> -->
    <label class="group-label">Password</label>
  </div>
 <h4>Role</h4>
 <div class="group">
 <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input">
  <label class="custom-control-label" for="customRadioInline1">Teacher</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input">
  <label class="custom-control-label" for="customRadioInline2">Parent</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline3" name="customRadioInline1" class="custom-control-input">
  <label class="custom-control-label" for="customRadioInline3">Student</label>
</div>
</div>
  <!-- <button type="submit" class="button align-self-baseline" style="background-color:#7B68EE;">
<a class="link" href="#/Teacher">
      Signup
  </a> -->
    <a href="#/Teacher" class="btn link"style="background-color:#7B68EE;" >Signup</a>
</form>
</div>
<section id="lab_social_icon_footer">
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
	/* pointer-events: none; */
	left: 5px;
	top: 10px;
	transition: all 0.2s ease;
}


/* active */

input:focus ~ .group-label, input.used ~ .group-label {
	top: -20px;
  transform: scale(.75); left: -2px;

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
/*  */
</style>
<script>
export default {
    name:'signup'
}
</script>
