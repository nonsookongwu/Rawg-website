import noImage from '../assets/no-image-placeholder-6f3882e0.webp'

const getCroppedImage = (url: string) => {
    if (!url) return noImage
let splitUrl = url.split('/')
const gamesIndex = splitUrl.indexOf("games");
splitUrl.splice(gamesIndex, 0, "crop/600/400");
return splitUrl.join("/");
}

export default getCroppedImage