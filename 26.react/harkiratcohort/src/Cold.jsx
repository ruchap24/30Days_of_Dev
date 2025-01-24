import PropTypes from 'prop-types';

function Cold({ textColor, userName ,create}) {
    let clr={color:create}
    return(
        <>
        <ul>
            <li style={clr}>
                home:{textColor}
            </li>
            <li>
                about:{userName}
            </li>
            <li>
                contact:{textColor}
            </li>
        </ul>
        </>
    )}
Cold.propTypes = {
    textColor: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    create: PropTypes.string.isRequired,
};

export default Cold