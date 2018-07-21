<template>
 <nav class="navbar navbar-default" role="navigation">
  <div class="container-fluid" >
   <!-- Brand and toggle get grouped for better mobile display -->
   <div class="navbar-header">
    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
     <span class="sr-only">切换导航</span>
     <span class="icon-bar"></span>
     <span class="icon-bar"></span>
     <span class="icon-bar"></span>
    </button>
    <a href="#" class="navbar-brand">
      <img src="https://ana.xjtu.edu.cn/images/logo_nav.png" class="logo">
    </a>
   </div>
   <!-- Collect the nav links, forms, and other content for toggling -->
   <div class="collapse navbar-collapse text-center" id="bs-example-navbar-collapse-1">
    <ul class="nav navbar-nav">
     <li><a href="#" class="hvr-underline-from-center" style="color: white;">社团首页</a></li>
     <li><a href="#" class="hvr-underline-from-center" style="color: white;">常见问题</a></li>
     <li><a href="#" class="hvr-underline-from-center" style="color: white;">网络报修</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
     <li><a href="#" class="hvr-underline-from-center" style="color: white;"><span class="glyphicon glyphicon-log-in"></span>  登录</a></li>
    </ul>
   </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
 </nav>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  background-color: #3071a9;
  padding: 0px;
  margin: 0px;
  border-radius: 0;
  border: 0px solid transparent;
  min-height: 60px;
}
.navbar li a{
  font-size: 16px;
  padding: 20px 15px;
}
.navbar li a:hover {
  background-color: #2e6799;
}

/* Underline From Center */
.hvr-underline-from-center {
  /* display: inline-block; */
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  position: relative;
  overflow: hidden;
}
.hvr-underline-from-center:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 51%;
  right: 51%;
  bottom: 0;
  background: #2098D1;
  height: 4px;
  -webkit-transition-property: left, right;
  transition-property: left, right;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-underline-from-center:hover:before, .hvr-underline-from-center:focus:before, .hvr-underline-from-center:active:before {
  left: 0;
  right: 0;
}

@media (min-width: 768px){
.container-fluid {
  width: 740px;
  }
}
@media (min-width: 992px){
.container-fluid {
  width: 960px;
  }
}
@media (min-width: 1200px){
.container-fluid {
  width: 1160px;
  }
}
</style>
