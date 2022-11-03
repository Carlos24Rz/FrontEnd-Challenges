import ThankYou from'../../../images/illustration-thank-you.svg';
import './rating.completion.styles.css'

const RatingCompletion = ({feedback}) => {
    return (
        <div className="card-body completion">
            <img className="thank-you" src={ThankYou} alt="Thank you"/>
            <div className="feedback-pill">
                You selected {feedback} of out 5
            </div>
            <h1>Thank you!</h1>
            <p className="text-center">
                We appreciate you taking the time to give a rating.
                If you ever need more support, don't hesitate to get in touch!
            </p>
        </div>
    );
};

export default RatingCompletion

