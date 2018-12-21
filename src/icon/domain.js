import React from 'react';
import iconSvg from '../icons/normalized/domain.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__domain" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender