import React from 'react';
import iconSvg from '../icons/normalized/guitar-electric.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__guitar-electric" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender