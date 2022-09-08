import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { createContext, CSSProperties, ReactElement } from 'react';
import { ProductContextProps, Product, onChangeArgs } from '../interfaces/interfaces';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children?: React.ReactElement | React.ReactElement[];
    className?: string;
    style?: React.CSSProperties;
    onChange?: (  args: onChangeArgs ) => void;
    value?: number;
}


export const ProductCard = ({ children, product, className, style, onChange , value }: Props) => {

    const { counter, increasyBy } = useProduct({onChange, product, value})

    return (
        <Provider value={{
            counter,
            increasyBy,
            product
        }}>
            <div 
                className={` ${styles.productCard} ${className}` } 
                style={ style}
            >
                { children}
            </div>
        </Provider>
    )
}


