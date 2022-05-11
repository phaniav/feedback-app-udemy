import PropTypes from 'prop-types'

function Card({ children, reverse }) {
  const cardClassName = `card ${reverse ? 'reverse' : ''}`

  return <div className={cardClassName}>{children}</div>
}

Card.defaultProps = {
  reverse: false,
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
}

export default Card
