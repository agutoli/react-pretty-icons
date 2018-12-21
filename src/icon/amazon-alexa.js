import React from 'react';
import iconSvg from '../icons/normalized/amazon-alexa.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__amazon-alexa" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender