import {fetchUtils} from 'react-admin';
import {stringify} from 'query-string';

const apiUrl = 'http://localhost:8080';
const httpClient = fetchUtils.fetchJson;

export default {
    getList: (resource, params) => {
        const {page, perPage} = params.pagination;
        const query = {
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify(params.filter),
            order: JSON.stringify(params.sort)
        };
        let url = `${apiUrl}/${resource}?${stringify(query)}`;

        if (query.filter !== '{}') {
            if (resource === 'car') {
                url = `${apiUrl}/${resource}/get-by-year-greater-than?${stringify({year: params.filter.year})}`;
            }
            if (resource === 'payment') {
                url = `${apiUrl}/${resource}/amount-sum-between-date?${stringify({
                    from: params.filter.from,
                    to: params.filter.to
                })}`;
            }
            if (resource === 'review') {
                url = `${apiUrl}/${resource}/get-driver-review-greater-than?${stringify({
                    driverId: params.filter.driverId,
                    rating: params.filter.rating
                })}`;
            }
            if (resource === 'order') {
                url = `${apiUrl}/${resource}/get-by-status?${stringify({
                    status: params.filter.status
                })}`;
            }
        } else {
            url = `${apiUrl}/${resource}?${stringify(query)}`;
        }


        return httpClient(url).then(({headers, json}) => ({
            data: json,
            total: parseInt((headers.get('content-range') || '5').split('/').pop(), 10),
        }));
    },

    getOne: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`).then(({json}) => ({
            data: json,
        })),

    getMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ids: params.ids}),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({json}) => ({data: json}));
    },

    getManyReference: (resource, params) => {
        const {page, perPage} = params.pagination;
        const {field, order} = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({headers, json}) => ({
            data: json,
            total: parseInt(headers.get('content-range').split('/').pop(), 10),
        }));
    },

    create: (resource, params) =>
        httpClient(`${apiUrl}/${resource}`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({json}) => ({
            data: {...params.data, id: json.id},
        })),

    update: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({json}) => ({data: json})),

    updateMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({id: params.ids}),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({json}) => ({data: json}));
    },

    delete: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
        }).then(({json}) => ({data: json})),

    deleteMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({id: params.ids}),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'DELETE',
            body: JSON.stringify(params.data),
        }).then(({json}) => ({data: json}));
    },
};