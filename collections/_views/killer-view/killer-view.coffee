---
title: Killer View
type: coffee
---
Vue.component('killer-view', {
    template: '#killer-view'
    data: ->
        {
            checked: false,
            title: 'Check me'
        }
    methods:
        {
            check: ->
                @checked = !@checked
                console.log('The killer view was clicked! ' + util.doHello())
                return
        }
})

    
