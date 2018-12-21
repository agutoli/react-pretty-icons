import React from 'react';
import iconSvg from '../icons/normalized/caravan.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__caravan" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender