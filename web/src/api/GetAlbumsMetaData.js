export const GetAlbums = async ({ pageParam }) => {
    try {
        const res = await fetch(`/api/get/albums/metadata?page=${pageParam}&limit=9`).then((respones) => { return respones.json() })
        if (!res) {
            throw new Error(`Response status: ${res.status}`)
        }
        return res
    }
    catch (error) {
        console.error(error.message)
    }
}