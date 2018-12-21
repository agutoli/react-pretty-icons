import React from 'react';
import iconSvg from '../icons/normalized/gift.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__gift" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender