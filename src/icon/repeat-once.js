import React from 'react';
import iconSvg from '../icons/normalized/repeat-once.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__repeat-once" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender