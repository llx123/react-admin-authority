export default {
  menus: [
    { path: '/dashboard', title: 'Dashboard', component: 'Dashboard', icon: 'dashboard' },
    { path: '/ui', title: 'UI', icon: 'dashboard',
      children: [
        { path: '/ui/button', title: '按钮', component: 'Dashboard', icon: 'dashboard', }
      ]
    },
  ]
}