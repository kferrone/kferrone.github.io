const axios = window.axios;
const bloggerURL = 'https://www.googleapis.com/blogger/v3';
const BLOGS = 'blogs';
const USERS = 'users';
const POSTS = 'posts';
const PAGES = 'pages';
const SELF = 'self';

export class Blogger {
    constructor(id, key) {
        this.id = id;
        this.key = key;
        this.keyParam = `key=${this.key}`;
    }

    get blogsEndpoint() {
        return `${bloggerURL}/${BLOGS}/${this.id}`;
    }

    get usersEndpoint() {
        return `${bloggerURL}/${USERS}`;
    }

    get postsEndpoint() {
        return `${this.blogsEndpoint}/${POSTS}`;
    }

    get pagesEndpoint() {
        return `${this.blogsEndpoint}/${PAGES}`;
    }

    appendKey(endpoint) {
        return `${endpoint}?${this.keyParam}`;
    }

    getUser(userID) {
        return this.blogger(`${this.usersEndpoint}/${userID}`);
    }

    getUserBlogs(userID) {
        return this.blogger(`${this.usersEndpoint}/${userID}/${BLOGS}`);
    } 

    getMyUser() {
        return this.blogger(`${this.usersEndpoint}/${SELF}`);
    }

    getMyBlogs() {
        return this.blogger(`${this.usersEndpoint}/${SELF}/${BLOGS}`);
    }

    getBlog() {
        return this.blogger(this.blogsEndpoint);
    }

    getPosts() {
        return this.blogger(this.postsEndpoint);
    }

    getPost(id) {
        return this.blogger(`${this.postsEndpoint}/${id}`);
    }

    getPages() {
        return this.blogger(this.pagesEndpoint);
    }

    getPage(id) {
        return this.blogger(`${this.pagesEndpoint}/${id}`);
    }

    blogger(endpoint) {
        return axios.get(this.appendKey(endpoint));
    } 
}

