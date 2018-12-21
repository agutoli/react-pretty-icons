import React from 'react';
import iconSvg from '../icons/normalized/phone-in-talk.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__phone-in-talk" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender