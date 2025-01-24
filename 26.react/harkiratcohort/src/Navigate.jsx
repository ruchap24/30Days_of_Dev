import PropTypes from 'prop-types';

function Navigate({name}) {
  return (
    <div>
        <h5>Navigate</h5>
        <h2>hii {name}</h2>
    </div>
  )};
Navigate.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Navigate