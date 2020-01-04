import { API } from '../config';
import queryString from 'query-string';

export const createCategory = (userId, token, category) => {
    return fetch(`${API}/category/create/${userId}`, {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
        .then(response => response.json())
        .catch(err => console.log(err));
}

export const createProduct = (userId, token, product) => {
    return fetch(`${API}/product/create/${userId}`, {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: product
    })
        .then(response => response.json())
        .catch(err => console.log(err));
}

export const getCategories = () => {
    return fetch(`${API}/categories`)
        .then(response => response.json())
        .catch(err => console.log(err));
}

export const getOneProduct = productId => {
    return fetch(`${API}/product/${productId}`)
        .then(resp => resp.json())
        .catch(err => console.log(err));
}

export const getProducts = (sortBy) => {
    return fetch(`${API}/products?sortBy=${sortBy}&order=desc&limit=6`)
        .then(resp => resp.json())
        .catch(err => console.log(err))
}

export const getFilteredProducts = (skip, limit, filters = {}) => {
    const data = { skip, limit, filters };
    return fetch(`${API}/products/by/search`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(resp => resp.json())
        .catch(err => console.log(err))
}

export const getRelatedProducts = prodId => {
    return fetch(`${API}/products/related/${prodId}`)
        .then(resp => resp.json())
        .catch(err => console.log(err))
}

export const searchList = params => {
    const query = queryString.stringify(params);
    return fetch(`${API}/products/search?${query}`)
        .then(resp => resp.json())
        .catch(err => console.log(err))
}