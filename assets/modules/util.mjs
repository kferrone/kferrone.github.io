const axios = window.axios;

export async function getBlogPost(category,year,month,day,name) {
    return axios.get(`/${category}/${year}/${month}/${day}/${name}.html`);
}

export async function getHtml(path) {
    return axios.get(`${path}.html`);
}

export async function getDataModel() {
    return axios.get('/assets/models/model.json');
}