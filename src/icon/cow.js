import React from 'react';
import iconSvg from '../icons/normalized/cow.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cow" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender