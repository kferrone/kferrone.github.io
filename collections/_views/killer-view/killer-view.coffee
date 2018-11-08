---
title: Killer View
type: coffee
selector: killer-view
class: KillerView
---

@KillerView =
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
                console.log('The killer view was clicked! ')
                return
        }
