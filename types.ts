export interface Billboard {
    id: string
    label: string
    imageUrl: string
}

export interface Category {
    id: string
    name: string
    billboard: Billboard
    imageUrl: string
}

export interface Image {
    id: string
    url: string
}

export interface Size {
    id: string
    name: string
    value: string
}

export interface Color {
    id: string
    name: string
    value: string
}

export interface Product {
    id: string
    category: Category
    name: string
    price: string
    discount: number
    discountEndDate: string
    discountEndTime: string
    isFeatured: boolean
    isArchived: boolean
    description: string
    size: Size
    color: Color
    images: Image[]
}

export interface CartItem extends Product {
    quantity: number;
}
export interface WishlistItem extends Product {}
