import './directory.styles.scss';
import DirectoryItem from '../directory-item/directory-item.component';

const categories = [
    {title: 'Hats', imageUrl: "https://i.ibb.co/cvpntL1/hats.png", route: 'shop/hats'},
    {title:'Jackets', imageUrl: "https://i.ibb.co/px2tCc3/jackets.png", route: 'shop/jackets'},
    {title:'Sneakers', imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png", route: 'shop/sneakers'},
    {title:'Womens', imageUrl: "https://i.ibb.co/GCCdy8t/womens.png", route: 'shop/womens'},
    {title:'Mens', imageUrl: "https://i.ibb.co/R70vBrQ/men.png", route: 'shop/mens'}
  ]


const Directory = () => {
    return (
        <div className="directory-container">
            {categories.map((category,idx) => (
                <DirectoryItem key={idx} category={category}/>
            ))}
        </div> 
    );
}

export default Directory;