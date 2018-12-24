---
---
routes.push
    path: '/blogger/:id'
    component: Vue.component('blogger',
        template: '#blogger'
        inject: ['blogger']
        data: ->
            post: Object
        created: ->
            @setPostContent()
        computed:
            postID: ->
                @$route.params.id
        methods:
            setPostContent: ->
                @blogger.getPost(@postID).then(
                    (response) => @post = response.data
                )
                    
    )