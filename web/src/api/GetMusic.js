export const GetMusic = async ({ musicId }) => {
    try {
        const res = await fetch(`/api/stream?music_id=${musicId}`)
        if (!res) {
            throw new Error(`Response status: ${res.status}`)
        }
        return res
    }
    catch (error) {
        console.log(error.message)
    }
}