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
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link link" href="#/SignIn">Signin <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link link" href="#/SignUp">Signup</a>
        </li>
      </ul>
    </div>
  </nav>
   <div class="col-md-offset-8">
<form>
<hgroup>
  <h2>Signup</h2>
</hgroup>
  <div class="group">
    <input type="text" required><span class="highlight"></span><span class="bar"></span>
<label class="group-label">Name</label>
  </div>
<div class="group">
    <input type="email" required><span class="highlight"></span><span class="bar"></span>
    <label class="group-label">Email</label>
  </div>
<div class="group">
    <input type="text" required><span class="highlight"></span><span class="bar"></span>
    <label class="group-label">Mobile no</label>
  </div>
<div class="group">
    <input type="password" required><span class="highlight"></span><span class="bar"></span>
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
  <button type="submit" class="button align-self-baseline"style="background-color:#7B68EE;">
      Signup
    <div class="ripples buttonRipples">
        <span class="ripplesCircle">
        </span>
    </div>
  </button>
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
*{
    box-sizing:border-box;
 }

body {
	font-family: Palatino Linotype;
	background: #eee;
  -webkit-font-smoothing: antialiased;
}

hgroup {
	text-align:center;
}

h1, h3 { font-weight: 150; }

h1 { color: #636363; }

h3 { color: #4a89dc; }

form {
	width: 400px;
	margin: 4em auto;
	padding: 3em 2em;
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
/*  */
</style>
<script>
export default {
    name:'signup'
}
</script>
