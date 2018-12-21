import React from 'react';
import iconSvg from '../icons/normalized/keg.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__keg" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender