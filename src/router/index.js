import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import Index from "../views/Index.vue";
import Welcome from "../views/Welcome.vue";
import Personal from "../views/Personal.vue";
import Genshin from "../views/Genshin.vue";
import NotFound from "../views/NotFound.vue";
import Post from "../views/Post.vue";
import Towebp from "../views/Towebp.vue";
import Clock from "../views/Clock.vue";
import GithubFile from "../views/GithubFile.vue";

const router = createRouter({
  // 在 Vue Router 4 里运用 Hash 模式
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: Index,
    },
    {
      path: "/welcome",
      name: "welcome",
      component: Welcome,
    },
    {
      path: "/personal",
      name: "personal",
      component: Personal,
    },
    {
      path: "/post",
      name: "post",
      component: Post,
    },
    {
      path: "/genshin",
      name: "genshin",
      component: Genshin,
    },
    {
      path: "/towebp",
      name: "towebp",
      component: Towebp,
    },
    {
      path: "/clock",
      name: "clock",
      component: Clock,
    },
    {
      path: "/githubfile",
      name: "githubfile",
      component: GithubFile,
    },
    {
      path: "/:catchAll(.*)",
      name: "notfound",
      component: NotFound,
    },
  ],
});

export default router;
