import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <li className="scroll-to-section">
      <a href="/" className={props.active !== undefined? 'active': null}>
        { props.text }
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