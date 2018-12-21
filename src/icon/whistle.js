import React from 'react';
import iconSvg from '../icons/normalized/whistle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__whistle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender