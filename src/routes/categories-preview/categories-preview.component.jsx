import { Fragment, useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { CategoriesContext } from "../../context/categories.context";


const CategoriesPreview = () => {
    const  { categories } = useContext(CategoriesContext);
    
    return (
       <Fragment>
            {
                categories.map((category, index) => {
                   return  <CategoryPreview key={index} category={category} />
                })
            }
       </Fragment>
    )
}

export default CategoriesPreview;