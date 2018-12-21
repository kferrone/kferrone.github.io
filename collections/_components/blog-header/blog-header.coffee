---
---
Vue.component('blog-header',
    template: '#blog-header'
    inject: ['getViewList']
    methods:
        getGravatar: ->
            util.getGravatar(@$root.profile.email,150)
)