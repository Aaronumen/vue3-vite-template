import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
const modules = import.meta.glob("../views/*/*.vue")
const routes: RouteRecordRaw[] = Object.keys(modules).map((item: any) => {
  const path = `/${item.split("/")[2]}`,
    component = modules[item],
    name = path.slice(1)
  return { path, component, name }
})

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
