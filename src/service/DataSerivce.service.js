import makeRequest from '.'

export function getAllData() {
    const url = 'https://api.github.com/users/defunkt/repos';
    return makeRequest({ url, method: 'GET' });
}