import './category-list.styles.scss'
import CategoryItem from '../category-item/Category-item.component'


const CategoryList = ({categories}) => {

    return (
        <div className="categories-container">
            {categories.map(({title, imageUrl},id) => (
                <CategoryItem key={id} title={title} imageUrl={imageUrl}/>
            ))}
        </div> 
    );
}

export default CategoryList;