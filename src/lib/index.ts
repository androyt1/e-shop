export const fetchProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    return await res.json()
}

export function formatCurrency(
    amount: number,
    userLocale: string,
    currencyCode: string
): string {
    const formatter = new Intl.NumberFormat(userLocale, {
        style: 'currency',
        currency: currencyCode,
    })

    return formatter.format(amount)
}

export const truncatedTitle = (title: string): string => {
    let truncated: string = title
    if (title.length > 25) {
        truncated = title.substring(0, 20)
        return truncated + '...'
    }
    return truncated
}
