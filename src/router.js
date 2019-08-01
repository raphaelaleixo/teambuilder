import Home from '@/views/Home.vue';

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/newproject',
    name: 'newProject',
    component: () => import('./views/NewProject.vue'),
  },
  {
    path: '/project/:id',
    name: 'project',
    component: () => import('./views/Project.vue'),
  },
];
