import { IReview } from "@/interfaces/review.interface";
import { products } from "./products.data";
import { IProduct } from "@/interfaces/product.interface";

export const reviews: IReview[] = [
    {
        id: 1,
        product: {} as IProduct,
        rating: 4,
        text: 'Nie jest az tak źle'
    },
    {
        id: 2,
        product: {} as IProduct,
        rating: 2,
        text: 'Nie jest az tak źle'
    },
    {
        id: 3,
        product: {} as IProduct,
        rating: 5,
        text: 'Nie jest az tak źle'
    },
]