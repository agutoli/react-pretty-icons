import React from 'react';
import iconSvg from '../icons/normalized/air-conditioner.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__air-conditioner" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender