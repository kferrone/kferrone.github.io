const $ = window.$;

// utils.mjs
export function addTextToBody(text) {
    const div = document.createElement('div');
    div.textContent = text;
    document.body.appendChild(div);
}

export function blahBla() {
    return 'Bla Bla Bla Blahhhh';
}

export function doHello() {
    return 'Hello modulicous world';
}

export function getBlogPost(category,year,month,day,name) {
    $.ajax({
        url: `/${category}/${year}/${month}/${day}/${name}.html`,
        dataType: 'html',
        success: function(data) {
            console.log('The blog data looks like:',data);
        }
    });
}

export function getHtml(path,success) {
    $.ajax({
        url: `${path}.html`,
        dataType: 'html',
        success: success
    });
}

export function getDataModel() {
    return JSON.parse($('script[id="data-model"]').html())
}

export function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /*remove the attribute, and call this function once more:*/
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
            }
        } 
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
        return;
        }
    }
}