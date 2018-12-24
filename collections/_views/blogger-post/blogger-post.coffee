---
---
routes.push
    path: '/blogger/:id'
    component: Vue.component('blogger-post',
        template: '#blogger-post'
        inject: ['blogger']
        data: ->
            post: Object
        created: ->
            @setPostContent()
            @$parent.hideHeader = true;
        computed:
            postID: ->
                @$route.params.id
        methods:
            setPostContent: ->
                @blogger.client.getPost(@postID).then(
                    (response) => @post = response.data
                )
                    
    )