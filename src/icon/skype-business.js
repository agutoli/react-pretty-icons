import React from 'react';
import iconSvg from '../icons/normalized/skype-business.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__skype-business" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender