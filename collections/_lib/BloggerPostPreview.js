---
---
const BLOGGER = 'blogger';
const LABELS = 'labels';
exports.BloggerPostPreview = class {
    constructor(post) {
        this.post = post;
        this.heritage = BLOGGER;
        this.title = post.title;
        this.author = post.author.displayName;
        this.excerpt = post.content;
        this.date = post.published;
        this.categories = [BLOGGER];
        this.id = `${BLOGGER}/${post.id}`;
        this.slug = this.post.id;
        this.tags = (LABELS in post) ? post.labels : [];
    }
}