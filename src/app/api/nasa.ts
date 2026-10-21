import { Apod } from './types'

export async function getNasaData() {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`
    const res = await fetch(url, {
        next: { revalidate: 3600 },
        signal: AbortSignal.timeout(10_000),
    })
    if (!res.ok) {
        throw new Error(`An error has occured: ${res.status}`)
    }
    const data: Apod = await res.json()
    return data
}
