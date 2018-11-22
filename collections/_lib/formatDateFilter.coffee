---
---
Vue.filter('formatDate', (value) -> 
    if (value) 
        moment(
            String(value), 
            'YYYY-MM-DD hh:mm:ss z'
        ).format('DD MMMM YYYY')
)