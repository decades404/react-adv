import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {

    const { counter, increasyBy } = useProduct()

    return (
        <Provider value={{
            counter,
            increasyBy,
            product
        }}>
            <div className={styles.productCard} >
                { children}
            </div>
        </Provider>
    )
}


