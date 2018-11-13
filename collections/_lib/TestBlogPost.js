---
title: Test Blog Post
type: js
selector: test-blog-post
class: TestBlogPost
template: inline
provider: hybrids
---

const define = hybrids.define;
const html = hybrids.html;

function mooNow() {
    console.log('Mooooooooo');
}

class TestBlogPost {
    constructor() {
        this.title = '';
        this.hidden = false;
        this.render = ({ title, hidden }) => html`
            <style>
                :host(:hover) {
                    color: red;
                }
                .blog-title {
                    
                }
                .blog-content {
                    animation-name: spin;
                    animation-duration: 5s;
                    transition: opacity 5s;
                    opacity: 0;
                }
                .blog-content:hover {
                    
                }
                @keyframes spin {
                    from {width: 10%;}
                    to {width 100%;}
                }
                .blog-content-loaded {
                    opacity: 1;
                }
                .blog-content-hidden {
                    opacity: 0;
                    display: block;
                    line-height:0;
                    height: 0;
                    overflow: hidden;
                }
            </style>
            <h2 class="blog-title" onclick="${host => {host.hidden = !host.hidden; console.log('Blog was clicked.');}}">
                ${title}
            </h2>
            <p>${hidden ? 'true' : 'false'}</p>
            <div class="blog-content ${hidden ? 'blog-content-loaded' : 'blog-content-hidden'}">
                <slot></slot>
            </div>
            
        `;
    } 
}

define('test-blog-post',new TestBlogPost());
ignoredElements.push('test-blog-post');