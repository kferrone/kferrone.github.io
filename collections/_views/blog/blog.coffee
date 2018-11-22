---
---
routes.push
    path: '/blog'
    component: Vue.component('blog',
        template: '#blog'
        computed:
            posts: ->
                @$root.$data.posts
    )