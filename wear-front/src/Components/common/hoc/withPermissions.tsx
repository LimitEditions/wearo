/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
// import PropTypes from 'prop-types'

export default (WrappedComponent: any) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />

  hocComponent.propTypes = {}

  return hocComponent
}
