import React from 'react';
import iconSvg from '../icons/normalized/details.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__details" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender