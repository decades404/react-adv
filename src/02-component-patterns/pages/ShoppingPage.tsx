import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import '../styles/custom-styles.css';

import { products } from '../data/products';

const product = products[0]

export const ShoppingPage = () => {


    return (
        <div >
            <h1>ShoppingStore</h1>
            <hr />
         

                <ProductCard
                    product={product}
                    className="bg-dark"
                    key={product.id}
                    initialValues={{
                        count: 4,
                        //maxCount: 10
                    }}
                >
                    {
                        ({reset, maxCount, isMaxCountReached, increaseBy, count}) => (
                            <>
                               <ProductImage className='custom-image' />
                                <ProductTitle className='text-white' />
                                <ProductButtons className='custom-buttons' />
                                
                                <button onClick={reset}>Reset</button>
                                <button onClick={ () => increaseBy(-2)}>-2</button>
                                {
                                    ( !isMaxCountReached && <button onClick={ () => increaseBy(+2)}>+2</button>)
                                }
                                
                                <span>{count} - {maxCount}</span>
                            </>
                        )
                    }
                 
                </ProductCard>

        </div>
    )
}
