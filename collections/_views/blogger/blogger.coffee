---
---
routes.push
    path: '/blogger/:id'
    component: Vue.component('blogger',
        template: '#blogger'
        inject: ['blogger']
        data: ->
            content: String
        created: ->
            @setPostContent()
        computed:
            postID: ->
                @$route.params.id
        methods:
            setPostContent: ->
                @blogger.getPost(@postID).then(
                    (response) => console.log(response)
                )
                    
    )