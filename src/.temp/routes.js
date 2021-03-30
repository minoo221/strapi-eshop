const c1 = () => import(/* webpackChunkName: "page--src-templates-product-vue" */ "C:\\projects\\strapi-eshop\\frontend\\src\\templates\\Product.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "C:\\projects\\strapi-eshop\\frontend\\src\\pages\\404.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\projects\\strapi-eshop\\frontend\\src\\pages\\Index.vue")

export default [
  {
    path: "/product/fisher-bezky/",
    component: c1
  },
  {
    name: "404",
    path: "/404/",
    component: c2
  },
  {
    name: "home",
    path: "/",
    component: c3
  },
  {
    name: "*",
    path: "*",
    component: c2
  }
]
