import { PropTypes } from 'prop-types'

const Icon = props => {
  const icon =
    props.icon.format === 'data' ? (
      <path d={props.icon.path} />
    ) : (
      props.icon.markup
    )

  return (
    <svg
      width={`${props.size}px`}
      height={`${props.size}px`}
      viewBox={props.icon.viewBox}
    >
      <title>{props.icon.title}</title>
      {icon}
      }
      <style jsx>{`
        svg {
          display: inline-block;
          vertical-align: middle;
          color: currentColor;
          fill: currentColor;
        }
      `}</style>
    </svg>
  )
}

Icon.propTypes = {
  icon: PropTypes.object.isRequired,
  size: PropTypes.number,
  color: PropTypes.string
}

Icon.defaultProps = {
  size: 16
}

export default Icon
