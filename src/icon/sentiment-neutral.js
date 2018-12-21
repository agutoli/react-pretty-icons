import React from 'react';
import iconSvg from '../icons/normalized/sentiment-neutral.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__sentiment-neutral" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender