interface Match {
    params: {
        location: string,
        id: string,
    }
}

interface CurrentApartment {
    price_formatted: string,
    title: string,
    thumb_url: string,
    bedroom_number: number,
    bathroom_number: number,
    summary: string,
}

interface FetchCurrentApartment {
    id: string,
    location: string,
    page: number,
}

interface Apartment {
    bedroom_number: number,
    bathroom_number: number,
    summary: string,
    lister_url: string,
    thumb_url: string,
    price_formatted: string,
    title: string,
    page: number,
    location: string,
}