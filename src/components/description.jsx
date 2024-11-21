import PropTypes from 'prop-types';
import '../styles/description.css'

function Description({paragraphe}) {
    return (
        <section className='description'>
            <div className={`${paragraphe.title}`}>
                <h2>{paragraphe.title}</h2>
                <p>{paragraphe.text}</p>
            </div>
        </section>
    )
}

Description.rototypes = {
    profile: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,

    }).isRequired,
};

export default Description;