import React, { useState } from 'react';
import RatingForm from './rating-form/Rating-form.component';
import RatingCompletion from './rating-completion/Rating-completion.component';
import './rating.style.css'

const Rating = () => {
    const [feedbackVal, setFeedback] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault();
        const val = e.target.elements.btnradio.value; 
        
        if(val) setFeedback(val);
     
    }

    return(
        <div className="card">
            {
                feedbackVal
                ? <RatingCompletion feedback={feedbackVal} />
                : <RatingForm  onsubmit={onSubmit}/>
            }
        </div>
    )
};

export default Rating;
