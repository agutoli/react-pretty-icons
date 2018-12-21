import React from 'react';
import iconSvg from '../icons/normalized/mobileme-logo-of-black-cloud.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__mobileme-logo-of-black-cloud" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender