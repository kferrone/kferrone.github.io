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
        heritage: String
    data: ->
        hidden: false
        content: ''
        loaded: false
    computed:
        linker: ->
            if @heritage == 'blogger'
                return @id
            else
                return '/post/' + @slug
)
