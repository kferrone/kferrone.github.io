---
---
routes.push
    path: '/home'
    alias: '/'
    component: Vue.component('my-home',
        template: '#my-home'
        computed:
            profile: ->
                @$root.profile
    )