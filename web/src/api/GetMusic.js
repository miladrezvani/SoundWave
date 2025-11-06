export const GetMusic = async () => {
    try {
        const res = await fetch("/api/stream")
        if (!res) {
            throw new Error(`Response status: ${res.status}`)
        }
        return res
    }
    catch (error) {
        console.log(error.message)
    }
}