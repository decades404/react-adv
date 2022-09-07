import { ProductCard, ProductImage, ProductTitle, ProductButtons  } from '../components';

const product = {
    id: '1',
    title: 'Coffee-mug-card',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>ShoppingStore</h1>
        <hr/>
        <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap"
            }}
        >
            <ProductCard product={product}>
                <ProductCard.Image />
                <ProductCard.Title title={'asdasdad'} />
                <ProductCard.Buttons/>
            </ProductCard>

            <ProductCard product={product}>
                <ProductImage />
                <ProductTitle />
                <ProductButtons/>

            </ProductCard>
          
        </div>
      
    </div>
  )
}