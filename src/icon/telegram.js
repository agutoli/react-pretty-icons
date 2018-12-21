import React from 'react';
import iconSvg from '../icons/normalized/telegram.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__telegram" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender