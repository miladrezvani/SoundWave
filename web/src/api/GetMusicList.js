export const GetMusicList = async ({ album_id }) => {
    try {
        const res = await fetch(`/api/get/music/list?album_id=${album_id}`).then((response) => { return response.json() })
        if (!res) {
            throw new Error(`Response status: ${res.status}`)
        }
        return res
    }
    catch (error) {
        console.error(error.message)
    }
}