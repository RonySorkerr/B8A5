
const loadApi = () => {
    const url = 'https://openapi.programming-hero.com/api/videos/categories';
    fetch(url)
    .then(res => res.json())
    .then(data => btns(data))
}


loadApi()