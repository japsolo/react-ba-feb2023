import PropTypes from 'prop-types';

const Button = ({text, active}) => {
  return (
    <li className="scroll-to-section">
      <a href="/" className={active !== undefined? 'active': null}>
        { text }
      </a>
    </li>
  );
};

Button.propTypes = {
    text: PropTypes.string,
    active: PropTypes.bool
}

Button.defaultProps = {
    active: true
}

export default Button;