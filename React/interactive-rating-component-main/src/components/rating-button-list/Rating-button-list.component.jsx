import RatingButtonItem from "../rating-button-item/Rating-button-item.component";
import './rating-button-list.styles.css'

const RatingButtonList = (props) => {
    const{groupName,totalButtons} = props;

    const buttonlist = [];
    for(let i=1;i <= totalButtons;i++){
        buttonlist.push(
            <RatingButtonItem key={`${groupName}${i}`} groupName={groupName} id={`${groupName}${i}`} content={i}/>
        );
    }

    
    return(
        <div className="form-check d-flex justify-content-around flex-wrap p-0 button-list ">
            {buttonlist}
        </div>
    );
};

export default RatingButtonList;