---
---
Vue.component('post-header',
    template: '#post-header'
    props:
        title: String
        date: String
        author: String
        tags: Array
        categories: Array
    data: ->
        hidden: false
        content: ''
        loaded: false
    computed:
        linker: ->
            return '/post/' + @slug
)