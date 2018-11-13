---
---
Vue.component('post-view',
    template: '#post-view'
    props:
        slug: String
        title: String
        date: String
        draft: Boolean
        categories: Array
        tags: Array
        id: String
    data: ->
        content: ''
    watch:
        id: (newVal,oldVal) ->
            console.log "id was #{oldVal} and is now #{newVal}"
            if typeof newVal == "undefined" or !newVal?
                @content = ''
                return
            unless oldVal == newVal
                @load()
                return
    methods:
        load: ->
            if @id?
                console.log "I'm getting the post ready for you . . ."
                app.getHtml(
                    @id,
                    (data) => 
                        @content = data
                        return
                    )
            return
    created: ->
        console.log('Lets get started with a post')
        @load()
)