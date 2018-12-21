import React from 'react';
import iconSvg from '../icons/normalized/garage.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__garage" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender