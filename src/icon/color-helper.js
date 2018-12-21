import React from 'react';
import iconSvg from '../icons/normalized/color-helper.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__color-helper" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender