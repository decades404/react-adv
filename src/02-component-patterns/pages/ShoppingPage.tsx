import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import '../styles/custom-styles.css';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';



export const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange } = useShoppingCart()

    return (
        <div >
            <h1>ShoppingStore</h1>
            <hr />
            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap"
            }}
            >
                {
                    products.map(product => (
                        <ProductCard
                            product={product}
                            className="bg-dark"
                            key={product.id}
                            onChange={onProductCountChange}
                            value={ shoppingCart[product.id]?.count  || 0 }
                        >
                            <ProductImage className='custom-image' />
                            <ProductTitle className='text-white' />
                            <ProductButtons className='custom-buttons' />

                        </ProductCard>
                    ))
                }

                <div className='shopping-cart'>
                    {
                        Object.entries(shoppingCart).map( ([key, product]) => (
                            <ProductCard
                                product={product}
                                className="bg-dark"
                                key={product.id}
                                style={{ width: '100px' }}
                                value={product.count}
                                //onChange={onProductCountChange}
                            >
                                <ProductImage className='custom-image' />
                                <ProductButtons className='custom-buttons' />
                            </ProductCard>
                        ))
                    }

                </div>

            </div>
           

        </div>
    )
}
