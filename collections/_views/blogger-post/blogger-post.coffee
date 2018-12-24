---
---
routes.push
    path: '/blogger/:id'
    component: Vue.component('blogger-post',
        template: '#blogger-post'
        inject: ['blogger','getPostMeta']
        created: ->
            @$parent.hideHeader = true;
        computed:
            post: ->
                @getPostMeta(@$route.params.id)
        watch:
            content: () ->
                util.appendToTitle(" | #{post.title}")
        methods:
            setPostContent: ->
                @blogger.client.getPost(@postID).then(
                    (response) => @post = response.data
                )
                    
    )