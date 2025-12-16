
export type Screen = 'home' | 'details' | 'cart' | 'favorites' | 'profile';

export interface FoodItem {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
    rating?: number;
    calories?: number;
    deliveryTime?: string;
    description: string;
}

export interface CartItemType extends FoodItem {
    quantity: number;
    extra?: string;
}
