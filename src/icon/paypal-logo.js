import React from 'react';
import iconSvg from '../icons/normalized/paypal-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__paypal-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender