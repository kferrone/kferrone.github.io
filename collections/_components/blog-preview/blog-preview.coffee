---
---
Vue.component('blog-preview',
    template: '#blog-preview'
    props:
        title: String
        slug: String
        excerpt: String
        id: String
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
