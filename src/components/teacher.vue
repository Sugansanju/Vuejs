<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark" style="background-color:#7B68EE;">
  <a class="navbar-brand" href="#/home">
      <img src="../assets/logo.png" style="max-width:35px; margin-top: -7px;" alt="">
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
    <ul class="nav justify-content-end">
    <b>
        <h5>
        <li class="nav-item">
            <a class="nav-link link" href="#/SignIn">Signin
                <span class="sr-only">(current)</span>
            </a>
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
  </nav>
        <div class="text-center">
            <!-- <div class="box-body">
                                <div class="col-sm-6">
                                <div  align="center">
                                     <img alt="User Pic"src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"  id="profile-image1" class="img-circle img-responsive">

                           <input id="profile-image-upload" class="hidden" type="file">
           <div style="color:#999;" >
               click here to change profile image
           </div>

</div>
</div>
</div> -->

<!-- <img src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" class="image--cover"> -->

    <div class="file-field">
        <div class="mb-4">
            <img src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg" class="rounded-circle z-depth-1-half avatar-pic">
            <input type="file">
            <div class="file-field"> <h5>Add Your Photo</h5>
            </div>
            </div>
        <!-- <div class="d-flex justify-content-center">
            <div class="btn btn-mdb-color btn-rounded float-left">
                <span>Add photo</span> -->
                <!-- <input type="file">
            </div>
        </div> -->
    </div>
        <h4>Name</h4>
        <p>Role</p></div>
        <div id="no-institutes" class="text-muted text-center">
            <i>
            <strong><h1>No institutes created yet...</h1></strong>
        </i>
    </div>
    <!-- <div class="innerdiv">
        <a href="/institute" class="btn btn-success">
        <span aria-hidden="true" class="glyphicon glyphicon-plus">
        </span>
    </a>
    </div> -->
    <div class="innerdiv">
    <a class="btn-floating btn-large scale-transition" data-toggle="modal" data-target="#modalLoginForm">
        <i class="fa fa-plus" aria-hidden="true">
        </i>
</a>
</div>
<div class="modal" id="modalLoginForm">
    <div class="modal-header">
        <h4> Select your institute</h4>
        <button type="button" class="close" data-dismiss="modal">
            &times;
        </button>
    </div>
    <div class="modal-body">
        <b>Let's find your institute</b>
        <a class="form-inline active-purple-4">
    <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search" aria-label="Search">
    <i class="fa fa-search" aria-hidden="true"></i>
</a>
</div>
<div class="modal-footer d-flex justify-content-center">
<h7>hello</h7>
</div>
</div>
</div>
</div>
</template>
<style>
.avatar-pic {
  width: 150px;
}
.nav{
    background-color:#7B68EE;
}
.active-purple-4 input[type=text]:focus:not([readonly]) {
    border: 1px solid #ce93d8;
    box-shadow: 0 0 0 1px #ce93d8;
}
.active-purple-4 .fa {
   color: #ce93d8;
}
  .innerdiv {
      position: fixed;
      bottom: 3rem;
      right: 3rem;
      box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
      border-radius: 100%;
  }
  body {
  	font-family: Palatino Linotype;
  	background: #eee;
    -webkit-font-smoothing: antialiased;
  }


.image--cover {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 20px;

  object-fit: cover;
  object-position: center right;
}
</style>
<script>
export default {
  name: 'HelloWorld',
}
</script>
