import './rating-button-item.styles.css'

const RatingButtonItem = (props) => {
     const {groupName,id,content} = props;
    
    return (
        <>
            <input className="btn-check" type="radio" name={groupName} id={id} value={content}/>
            <label className="btn btn-primary rounded-circle buttom-item" htmlFor={id}>
                {content}
            </label>
        </>
    );
};

export default RatingButtonItem;