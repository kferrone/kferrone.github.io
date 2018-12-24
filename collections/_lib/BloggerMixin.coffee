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
                    for idx,post of response.data.items
                        bloggerPost = new exports.BloggerPostPreview(post)
                        console.log("The title is #{bloggerPost.title}")
                        @posts.push bloggerPost
                .catch (error) =>
                    console.log('Got an error getting the posts: ', error)
            