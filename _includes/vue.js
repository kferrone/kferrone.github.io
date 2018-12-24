var vm = new Vue({
    el: '#layout',
    router: new VueRouter({
        routes
    }),
    data: dataModel,
    created: function () {
        util.setTitle(this.getViewData(this.$route.path).title);
    },
    computed: {
        activeView: function () {
            return this.getViewData(this.$route.path);
        }
    },
    watch: {
        activeView: function (activeView) {
            util.setTitle(activeView.title);
        }
    },
    methods: {
        getViewList: function () {
            return this.views
                .filter(view => view.order != 0 && !view.draft)
                .sort((a, b) => a.order - b.order);
        },
        getViewData: function (path) {
            path = (path == '/') ? '/home' : path;
            return this.views.filter((view) => path.includes(view.permalink))[0];
        },
        getPostMeta: function (slug) {
            return this.posts.filter((post) => post.slug === slug)[0];
        },
        getBlogger: function () {
            if ('blogger' in this) {
                return util.getBlogger(this.blogger.id,this.blogger.key);
            } else return null;
        }
    },
    provide: function() {
        return {
            getViewList: this.getViewList,
            getViewData: this.getViewData,
            getPostMeta: this.getPostMeta,
            getBlogger: this.getBlogger,
            profile: this.profile
        }
    }
});