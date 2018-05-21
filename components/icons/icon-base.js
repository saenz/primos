import PropTypes from 'prop-types'

const IconBase = ({children, size, color, viewBox}) => {
  return (
    <svg className='icon' width='32' height='32' viewBox={viewBox}>
      {children}

      <style jsx>{`
      .icon { 
        display: inline-block;
          vertical-align: text-top;
        fill: ${color};
        width: ${size}px;
        height: ${size}px;
      }
    `}</style>
    </svg>
  )
}

IconBase.propTypes = {
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  color: PropTypes.string,
  viewBox: PropTypes.string
}

IconBase.defaultProps = {
  size: 16,
  viewBox: '0 0 1024 1024',
  color: 'currentColor'
}

export default IconBase
