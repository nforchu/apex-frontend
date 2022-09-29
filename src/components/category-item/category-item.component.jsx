import './category-item.styles.scss';

const CategoryItem = ({category}) => {
    const {title, imageUrl} = category;
    return (
        <>
        <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
            }}/>
            <div className='category-body-container'>
            <h2>{title}</h2>
            <p>shop now</p>
        </div>
        </>
    )
}

export default CategoryItem;