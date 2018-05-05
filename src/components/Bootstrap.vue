<template>
    <div class="container">
            <div class="row">
                <div class="col-md-6">
                        <div class="card">
                                <div class="card-header">
                                    form components
                                </div>
                                <div class="card-body">
                                    <form>
                                    <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                                    <span class="highlight"></span><span class="bar"></span>
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                                    <span class="highlight"></span><span class="bar"></span>
                                    </div>
                                    <div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="customCheck1">
  <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
</div>
                                    <button type="button" class="btn btn-wave btn-primary">Submit</button>
                                    </form>
                                </div>
                        </div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
}
</script>
