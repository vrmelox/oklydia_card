import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/info.css'

function Info({profile}) {
    return (
        <section className='profile-card'>
            <div className="profile-header">
                <img 
                    src={profile.image}
                    alt={`${profile.image}, ${profile.job}`}
                    className='profile-image'
                />
                <div className="profile-details">
                    <h1 className="profile-name">{profile.name}</h1>
                    <p className="profile-job">{profile.job}</p>
                    <p className="profile-email">
                        <a href={`mailto:${profile.email}`} aria-label={`Email ${profile.name}`}>
                            {profile.email}
                        </a>
                    </p>
                </div>
            </div>
            <div className='profile-actions'>
                <button className="btn-email">
                    <FontAwesomeIcon icon={faEnvelope} className='icon'/>
                    Email
                </button>
                <button className="btn-linkedin">
                    <FontAwesomeIcon icon={faLinkedin} className='icon'/>
                    LinkedIn
                </button>
            </div>
        </section>
    )
}

Info.prototypes = {
    profile: PropTypes.shape({
        name: PropTypes.string.isRequired,
        job: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,

    }).isRequired,
};

export default Info;