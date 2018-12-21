import React from 'react';
import iconSvg from '../icons/normalized/tablet-cellphone.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__tablet-cellphone" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender