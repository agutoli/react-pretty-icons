import React from 'react';
import iconSvg from '../icons/normalized/down-arrow.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__down-arrow" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender