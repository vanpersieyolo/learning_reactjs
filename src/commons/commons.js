export const AllowedHTTPRequest = ['POST', 'GET', 'PUT', 'DELETE'];
let showLoading = 0;
let hideLoading = 0;

export function startLoading() {
    showLoading++;
    const element = document.getElementById('loading');
    if (element) {
        if (element.classList.contains('hidden')) {
            element.classList.remove('hidden');
        }
    }
}

export function stopLoading() {
    hideLoading++;
    const element = document.getElementById('loading');
    if (element) {
        if (!element.classList.contains('hidden')) {
            if (showLoading === hideLoading) {
                element.classList.add('hidden');
                showLoading = hideLoading = 0;
            }
        }
    }
}