---
---
Vue.component('blog-header',
    template: '#blog-header'
    methods:
        getGravatar: ->
            util.getGravatar(@$root.profile.email,150)
)