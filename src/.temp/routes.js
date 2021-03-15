const c1 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\projects\\strapi-eshop\\frontend\\node_modules\\gridsome\\app\\pages\\404.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\projects\\strapi-eshop\\frontend\\src\\pages\\Index.vue")

export default [
  {
    name: "404",
    path: "/404/",
    component: c1
  },
  {
    name: "home",
    path: "/",
    component: c2
  },
  {
    name: "*",
    path: "*",
    component: c1
  }
]
