const form = document.querySelector("#searchForm")
const shows = document.getElementById("shows")

form.addEventListener("submit", async function(e) {
    e.preventDefault()
    const searchTerm = form.elements.query.value
    const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
    let showsHtml = makeImages(response.data)
    shows.innerHTML = showsHtml
    console.log(response.data[0])
    form.elements.query.value = ""
    
})

const makeImages = (shows) => {
    showsHtml = ""
    for (let result of shows) {
        if (result.show.image) {
            showsHtml += `
                <div class="show">
                    <img class="show-img" src=${result.show.image.medium}>
                    <div class="show-details">
                        <h2>${result.show.name}</h2>
                        <h3>Genres: <span class="show-genres">${result.show.genres.join(", ")}</span></h3>
                        <h3>Rating: <span class="show-rating">${result.show.rating.average !== null ? result.show.rating.average: "-"}</span></h3>
                        <button><a href=${result.show.url}>Know More</a></button>
                    </div>
                </div>
            `
        }
    }
    return showsHtml
}