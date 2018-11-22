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
                util.getHtml(@post.id).then(
                    (response) => @content = response.data
                )
    )