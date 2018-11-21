---
---
routes.push
    path: '/post/:slug'
    component: Vue.component(
        'post',
        template: '#post'
        data: ->
            activePost: Object
        created: ->
            @activePost = @getActivePostMeta()
        computed:
            activePostSlug: ->
                @$route.params.slug
        methods:
            getActivePostMeta: ->
                @$root.getPostData(@activePostSlug) 
    )