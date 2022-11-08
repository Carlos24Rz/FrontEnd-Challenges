import './score-container.style.css'

const ScoreContainer = ({outcome, count}) => {

    return (
        <div className='score-container'>
            <h2>{outcome}</h2>
            <p>{count}</p>
        </div>

    );
};

export default ScoreContainer;