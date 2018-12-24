---
---
exports.BloggerMixin = 
    methods:
        setBloggerClient: -> 
            @blogger.client = if @blogger.enabled then util.getBlogger(@blogger.id,@blogger.key) else null
        setBloggerMeta: ->
            @blogger.client.getBlog()
                .then (response) =>
                    @blogger.meta = response.data
                .catch (error) =>
                    console.log('Got an error getting the blogs: ', error)
        setBloggerPosts: ->
            @blogger.client.getPosts()
                .then (response) =>
                    for post of response.data.items
                        @posts.push new exports.BloggerPostPreview(post)
                .catch (error) =>
                    console.log('Got an error getting the posts: ', error)
            