var vm = new Vue({
    el: '#layout',
    router: new VueRouter({
        routes
    }),
    mixins: [
        exports.BloggerMixin
    ],
    data: dataModel,
    created: function() {
        util.setTitle(this.getViewData(this.$route.path).title);
        if (this.blogger.enabled) {
            this.categories.push('blogger');
        }
        this.setBloggerClient();
        this.setBloggerMeta();
        this.setBloggerPosts();
    },
    computed: {
        activeView: function() {
            return this.getViewData(this.$route.path);
        }
    },
    watch: {
        activeView: function (activeView) {
            util.setTitle(activeView.title);
        }
    },
    methods: {
        getViewList: function() {
            return this.views
                .filter(view => view.order != 0 && !view.draft)
                .sort((a, b) => a.order - b.order);
        },
        getPostList: function() {
            return this.posts
                .sort((a, b) => a.date - b.date);
        },
        getViewData: function(path) {
            path = (path == '/') ? '/home' : path;
            return this.views.filter((view) => path.includes(view.permalink))[0];
        },
        getPostMeta: function(slug) {
            return this.posts.filter((post) => post.slug === slug)[0];
        }
    },
    provide: function() {
        return {
            getViewList: this.getViewList,
            getViewData: this.getViewData,
            getPostMeta: this.getPostMeta,
            getPostList: this.getPostList,
            blogger: this.blogger,
            profile: this.profile
        }
    }
});