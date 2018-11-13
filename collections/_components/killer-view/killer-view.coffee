---
---
Vue.component('killer-view',
    template: '#killer-view'
    props:
        activeView: String
        slug: String
        title: String
        date: String
        draft: Boolean
        categories: Array
        tags: Array
        order: Number
        subViews: Array
    computed:
        isActive: ->
            @activeView == @slug
)