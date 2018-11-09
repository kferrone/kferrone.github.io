---
title: Blog Post
type: js
selector: blog-post
class: BlogPost
template: inline
provider: hybrids
---

function mooNow() {
    console.log('Mooooooooo');
}

class BlogPost {
    constructor() {
        this.title = '';
        this.show = false;
        this.render = ({ title, show }) => html`
            <link 
                rel="stylesheet" 
                href="/assets/style.css">
            <style include="/assets/style.css">
                :host(:hover) {
                    color: red;
                }
                .blog-title {
                    @apply --typography;
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
            </style>
            <h2 class="blog-title" onclick="${host => {host.show = !host.show; console.log('Blog was clicked.');}}">
                ${title}
            </h2>
            <p>${show ? 'true' : 'false'}</p>
            <div class="blog-content ${show ? 'blog-content-loaded' : ''}">
                <slot></slot>
            </div>
            
        `;
    } 
}