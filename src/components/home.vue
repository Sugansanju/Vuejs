<template>
    <div class="home">
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
<section id="lab_social_icon_footer">
<!-- Include Font Awesome Stylesheet in Header -->
<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
<div class="container">
        <div class="text-center center-block">
                <a href="https://www.facebook.com/"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a>
	            <a href="https://twitter.com/"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a>
	            <a href="https://plus.google.com/"><i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i></a>
	           <a href="https://www.instagram.com/?hl=en"><i id="social-insta" class="fa fa-instagram fa-3x social"></i></a>
    </div>
</div>
</section>
    </div>
</template>
<style>
vue-image {
    height: 100vh;
    padding-bottom: 88px;
    top: 88px;
    max-width: 483px;
    width: 100%;
    margin: 0 auto;
    position: relative;
}
.link{
    color:#fff;
}
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
</style>
<script>
export default {
    name:'home'
}
</script>
