---
---
routes.push
    path: '/contact'
    component: Vue.component('contact-me',
        template: '#contact-me'
        inject: ['sendEmail']
        data: ->
            sent: false
            email:
                subject: ""
                from: ""
                body: ""
        methods:
            resetEmail: (event) ->
                console.log('Events work!',event)
            sendEmailEventHandler: (event) ->
                console.log("The email will be sent.",event)
                @sendEmail(@email).then(
                    (response) => 
                        console.log("Yay the email sent!",response)
                        @sent = true
                        @email = 
                            subject: ""
                            from: ""
                            body: ""
                ).catch(
                    (e) => console.log("Uh oh the email did not send!",e)
                )
                event.preventDefault()
    )

