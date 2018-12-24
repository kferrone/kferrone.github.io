---
---
routes.push
    path: '/blog'
    query:
        category: null
        tag: null
    component: Vue.component('blog',
        template: '#blog'
        inject: ['getBlogger']
        created: ->
            @blogger = @getBlogger()
            @blogger.getBlog()
                .then((response) =>
                    console.log('Got some blogs: ', response)
                ).catch((error) =>
                    console.log('Got an error getting the blogs: ', error)
                )
        data: ->
            blogger: Object
        computed:
            posts: ->
                if @$route.query.category?
                    @getPostsByCategory(@$route.query.category)
                else if @$route.query.tag?
                    @getPostsByTag(@$route.query.tag)
                else
                    @getPosts()
        methods:
            getPosts: ->
                @$root.$data.posts
            getPostsByCategory: (category) ->
                @getPosts().filter((post) -> category in post.categories)
            getPostsByTag: (tag) ->
                @getPosts().filter((post) -> tag in post.tags)
    )