export default {
  menus: [
    { path: '/dashboard', title: 'Dashboard', component: 'Dashboard', icon: 'dashboard', roles: ['admin'] },
    { path: '/ui', title: 'UI', icon: 'dashboard', roles: ['admin'],
      children: [
        { path: '/ui/button', title: '按钮', component: 'Button', icon: 'dashboard', roles: ['admin'] }
      ]
    }
  ]
}