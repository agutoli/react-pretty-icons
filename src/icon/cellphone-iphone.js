import React from 'react';
import iconSvg from '../icons/normalized/cellphone-iphone.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cellphone-iphone" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender