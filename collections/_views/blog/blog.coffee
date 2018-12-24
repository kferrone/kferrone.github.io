---
---
routes.push
    path: '/blog'
    query:
        category: null
        tag: null
    component: Vue.component('blog',
        template: '#blog'
        inject: ['getPostList']
        computed:
            posts: ->
                if @$route.query.category?
                    @getPostsByCategory(@$route.query.category)
                else if @$route.query.tag?
                    @getPostsByTag(@$route.query.tag)
                else
                    @getPostList()
        methods:
            getPostsByCategory: (category) ->
                @getPostList().filter((post) -> category in post.categories)
            getPostsByTag: (tag) ->
                @getPostList().filter((post) -> tag in post.tags)
            
    )