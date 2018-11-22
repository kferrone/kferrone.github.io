var vm = new Vue({
    el: '#belly',
    router: new VueRouter({
        routes
    }),
    data: dataModel,
    created: function () {
        this.setTitle(this.getViewData(this.$route.path).title);
    },
    computed: {
        activeView: function () {
            return this.getViewData(this.$route.path);
        }
    },
    watch: {
        activeView: function (activeView) {
            this.setTitle(activeView.title);
        }
    },
    methods: {
        setTitle: function (title) {
            document.title = title;
        },
        getViewList: function () {
            return this.views
                .filter(view => view.order != 0 && !view.draft)
                .sort((a, b) => a.order - b.order);
        },
        getViewData: function (path) {
            return this.views.filter((view) => path.includes(view.permalink))[0];
        },
        getPostMeta: function (slug) {
            return this.posts.filter((post) => post.slug === slug)[0];
        }
    }
});