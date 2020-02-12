export interface Match {
    params: {
        location: string,
        id: string,
    }
}

export interface CurrentApartment {
    price_formatted: string,
    title: string,
    thumb_url: string,
    bedroom_number: number,
    bathroom_number: number,
    summary: string,
}

export interface FetchCurrentApartment {
    id: string,
    location: string,
    page: number,
}

export interface Apartment {
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
