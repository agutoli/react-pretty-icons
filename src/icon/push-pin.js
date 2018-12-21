import React from 'react';
import iconSvg from '../icons/normalized/push-pin.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__push-pin" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender