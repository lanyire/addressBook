// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Customers from './components/Customers'
import About from './components/About'
import Add from './components/Add'
import CustomerDetails from './components/CustomerDetails'
import Edit from './components/Edit'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

//设置路由
const router = new VueRouter({
        mode: "history",
        base: __dirname,
        routes: [
            { path: "/", component: Customers },
            { path: "/about", component: About },
            { path: "/add", component: Add },
            { path: "/customer/:id", component: CustomerDetails },
            { path: "/edit/:id", component: Edit }
        ]
    })
    /* eslint-disable no-new */
new Vue({
    router,
    template: `
    <div id="app">
       <nav class="navbar navbar-default">
          <div class="container">
             <div class="navbar-header">
                <a class="navbar-brand" href="#">公司通讯录</a>
              </div>
              <div id="navbar" class="collapse navbar-collapse">
                  <ul class="nav navbar-nav">
                    <li><router-link to="/">主页</router-link></li>
                    <li><router-link to="/about">关于我们</router-link></li>
                  </ul>
                  <ul class="nav navbar-nav navbar-right">
                    <li><router-link to="/add">添加用户</router-link></li>
                  </ul>
               </div>
           </div>
        </nav>
        <router-view></router-view>
    </div>
      `
}).$mount("#app")