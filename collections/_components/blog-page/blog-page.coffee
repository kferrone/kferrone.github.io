---
---
Vue.component('blog-page',
    template: '#blog-page'
    props:
        id: String
        title: String
        slug: String
        permalink: String
        categories: Array
        tags: Array
        class: String
        date: String
        draft: Boolean
        order: Number
        hideHeader: false
    data: ->
        hidden: false
        content: ''
        loaded: false
    computed:
        linker: ->
            return '/post/' + @slug
)
