---
---
routes.push
    path: '/post/:slug'
    component: Vue.component('post',
        template: '#post'
        inject: ['getPostMeta']
        data: ->
            content: String
        created: ->
            @setPostContent()
            util.appendToTitle(" | #{@post.title}")
        computed:
            post: ->
                @getPostMeta(@$route.params.slug)
        watch:
            content: () ->
                util.appendToTitle(" | #{post.title}")
        methods:
            setPostContent: ->
                html = util.getLocal(@post.id)
                if html?
                    @content = html
                else
                    util.getHtml(@post.id).then(
                            (response) => @content = util.saveLocal(@post.id,response.data)
                        )
    )