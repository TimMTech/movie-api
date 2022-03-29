const saveToLocalStorage = (item) => {
    localStorage.setItem('movie-favourites', JSON.stringify(item))
}

export default saveToLocalStorage