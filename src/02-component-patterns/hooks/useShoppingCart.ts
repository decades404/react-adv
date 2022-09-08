import { Product, ProductInCart } from "../interfaces/interfaces";
import { useState } from 'react';


export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
        console.log('onProductCountChange', count, product);

        setShoppingCart(oldShoppingCart => {
            
            if (count == 0) {
                //delete oldShoppingCart[product.id]
                const { [product.id]: toDelete, ...rest } = oldShoppingCart;
                return { ...rest };
            }
            return {
                ...oldShoppingCart,
                [product.id]: { ...product, count }
            }
            
        })
    }

    return {
        shoppingCart,
        onProductCountChange
    }
}