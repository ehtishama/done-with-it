import {apiClient} from "./apiClient";

const endpoint = "/listings/"

function getListings() {
    return apiClient.get(endpoint)
}

function postListing(listing, onProgress) {

    const data = new FormData()

    data.append("title", listing.title)
    data.append("price", listing.price)
    data.append("categoryId", listing.category.id)
    data.append("description", listing.description)

    listing.images.forEach(
        (image, idx) =>
            data.append(
                'images',
                {name: image + idx, type: 'image/jpeg', uri: image}
            )
    )

    return apiClient.post(endpoint, data, {
        onUploadProgress: (progress) =>
            onProgress(progress.loaded / progress.total)
    })

}


export default {
    getListings, postListing
}