export type RatingProps = {
    rate: number
    count: number
}
export type ProductProps = {
    id: number
    title: string
    price: 109.95
    description: string
    category: string
    image: string
    rating: RatingProps
}
