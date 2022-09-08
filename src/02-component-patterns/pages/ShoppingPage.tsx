import { ProductCard, ProductImage, ProductTitle, ProductButtons  } from '../components';
import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Coffee-mug-card',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div >
        <h1>ShoppingStore</h1>
        <hr/>
        <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap"
            }}
        >
            <ProductCard 
                product={product}
                className="bg-dark"
            >
                <ProductCard.Image />
                <ProductCard.Title 
                    title={'asdasdad'} 
                    className='text-white'
                />
                <ProductCard.Buttons className='custom-buttons'/>
            </ProductCard>

            <ProductCard 
                product={product}
                className="bg-dark"
            >
                <ProductImage  className='custom-image'/>
                <ProductTitle className='text-white'/>
                <ProductButtons className='custom-buttons' />

            </ProductCard>


             <ProductCard 
                product={product}
                style={{
                    backgroundColor: 'cyan'
                }}
              
            >
                <ProductImage style={{}}  />
                <ProductTitle style={{color: 'white'}} />
                <ProductButtons  style={{justifyContent:'end'}} />

            </ProductCard>
          
        </div>
      
    </div>
  )
}
