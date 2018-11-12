---
---
Vue.component('blog-post',
    template: '#blog-post'
    props:
        title: String
        href: String
        excerpt: String
    data: ->
        hidden: false
        content: ''
        loaded: false
    methods:
        read: ->
            if not @loaded
                console.log "I'm getting the post ready for you . . ."
                app.getHtml(
                    @href,
                    (data) => 
                        @content = data
                        @loaded = true
                        return
                    )
            return
)
