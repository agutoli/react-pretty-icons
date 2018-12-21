import React from 'react';
import iconSvg from '../icons/normalized/block-helper.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__block-helper" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender