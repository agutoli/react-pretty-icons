import React from 'react';
import iconSvg from '../icons/normalized/soy-sauce.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__soy-sauce" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender