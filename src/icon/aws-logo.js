import React from 'react';
import iconSvg from '../icons/normalized/aws-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__aws-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender