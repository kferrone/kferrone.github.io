---
---
routes.push
    path: '/contact'
    component: Vue.component('contact-me',
        template: '#contact-me'
        data: ->
            subject: ""
            email: ""
            message: ""
    )

