import React from 'react';
import iconSvg from '../icons/normalized/speaker.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__speaker" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender