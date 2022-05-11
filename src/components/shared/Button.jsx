import PropTypes from 'prop-types'

function Button({ children, type, version, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: 'button',
  version: 'primary',
  isDisabled: false,
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  isDisabled: PropTypes.bool,
}

export default Button
