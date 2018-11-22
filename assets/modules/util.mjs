const axios = window.axios;

export function getBlogPost(category,year,month,day,name) {
    return axios.get(`/${category}/${year}/${month}/${day}/${name}.html`);
}

export function getHtml(path) {
    return axios.get(`${path}.html`);
}

export async function getDataModel() {
    //return JSON.parse($('script[id="data-model"]').html())
    return axios.get('/assets/models/model.json');
}