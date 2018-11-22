---
---
routes.push
    path: '/post/:slug'
    component: Vue.component('post',
        template: '#post'
        data: ->
            content: String
        created: ->
            @setPostContent()
        computed:
            post: ->
                @$root.getPostMeta(@$route.params.slug)
        methods:
            setPostContent: ->
                html = util.getLocal(@post.id)
                if html?
                    console.log('Found a post')
                    @content = html
                else
                    util.getHtml(@post.id).then(
                            (response) => @content = util.saveLocal(@post.id,response.data)
                        )
    )