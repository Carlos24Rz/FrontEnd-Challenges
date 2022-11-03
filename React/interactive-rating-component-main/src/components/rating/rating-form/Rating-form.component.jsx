import RatingButtonList from "../../rating-button-list/Rating-button-list.component";
import './rating-form.styles.css'
import IconStar from'../../../images/icon-star.svg';

const RatingForm = ({onsubmit}) => {
    return(
        <form className="card-body" onSubmit={onsubmit}>
            <img className="icon" src={IconStar} alt="star"/>
            <h2>How did we do?</h2>
            <p className="card-text">
                Please let us know how we did with your support request.
                All feedback is appreciated to help us improve our offering!
            </p>
            <RatingButtonList groupName="btnradio" totalButtons={5}/>
            <button className="btn btn-primary submit w-100" type="submit">Submit</button>
        </form> 
    );
};

export default RatingForm;
