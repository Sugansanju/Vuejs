<template>
    <div>
        <nav class="nav navbar-expand-lg navbar-dark">
  <a class="nav nav-link link ex1" href="#/home">
      <h2>Dexter </h2>
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
        <div class="text-center">
<form class="md-4">
    <div class="file-field">
        <div class="mb-4">
            <img src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg" class="rounded-circle z-depth-1-half avatar-pic">
        </div>
        <div class="d-flex justify-content-center">
                <input type="file">
        </div>
    </div>
</form>
        <h4>Name</h4>
        <p>Role</p></div>
        <div id="no-institutes" class="text-muted text-center">
            <i>
            <strong><h1>No institutes created yet...</h1></strong>
        </i>
    </div>
    <div class="innerdiv">
    <a class="btn button btn-large scale-transition" data-toggle="modal" data-target="#myModal">
        <i class="fa fa-plus" aria-hidden="true">
        </i>
</a>
</div>
<div class="modal fade" id="myModal">
    <div class="modal-dialog" >
        <div class="modal-content">
            <div class="modal-header">
          <h4 class="modal-title">Select your institute</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
            <b>Let's find your institute</b>
            <a class="form-inline active-purple-4">
        <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search" aria-label="Search">
        <i class="fa fa-search" aria-hidden="true">
        </i>
    </a>
        </div>
        <div class="modal-footer  d-flex justify-content-right">
            <a href="#" class="btn link ex2" aria-pressed="true" id="new">
        <i class="fa fa-plus"  >
             Add new institute
        </i>
            </a>
            <a href="#" class="btn link ex2" aria-pressed="true">
                <i class="fa fa-user-plus">
                    Request to join
                </i>
            </a>
        </div>
        </div>
    </div>
</div>
<div class="container col-md-6 new">
  <div class="card d-flex justify-content-md-center">
      <div class="card-header">
          <h4>Add your institute</h4>
      </div>
          <div class="card-content">
              <label>Institute name :</label>
              <input type="text" placeholder="enter name">
          </div>
              <div class="card-footer">
                  <a class="btn link ex2" href="#" >Add</a>
              </div>
  </div>

</div>
    </div>
</template>
<style>
.avatar-pic {
  width: 100px;
}
.modal-header{
    padding :1em;
}
.modal-body{
    height:330px;
}
.button{
    border-radius: 50%;
}
/* .active-purple-4 input[type=text]:focus:not([readonly]) {
    border: 1px solid #ce93d8;
    box-shadow: 0 0 0 1px #ce93d8;
}
.active-purple-4 .fa {
   color: #ce93d8;
} */
  .innerdiv {
      position: fixed;
      bottom: 3rem;
      right: 3rem;
      box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
      border-radius: 100%;
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
