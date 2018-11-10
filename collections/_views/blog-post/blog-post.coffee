---
title: blog-post
type: coffee
---
Vue.component('blog-post',{
    template: '#blog-post'
    props:
        [
            'title',
            'href'
        ]
    data: ->
        {
            hidden: false,
            content: ''
        }
    methods:
        {
            read: ->
                console.log "I'm getting the post ready for you . . ."
                util.getHtml(this.href,(data) => this.content = data)
                return
        }
})
