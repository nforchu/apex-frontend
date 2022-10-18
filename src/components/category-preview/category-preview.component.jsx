import { useNavigate } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import './category-preview.styles.scss';

const CategoryPreview = ({category}) => {
    const { title, items } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(`${title.toLowerCase()}`)
    return (
        <div className='category-preview-container'>
            <h2>
                <span onClick={onNavigateHandler} className='title'>{title.toUpperCase()}</span>
            </h2>

            <div className='preview'>
                {
                    items
                        .filter((_, index) => index < 4)
                        .map((product, ind) => <ProductCard key={ind} product={product}/>)
                }
            </div>
        </div>
    )

}

export default CategoryPreview;