import React from 'react';
import iconSvg from '../icons/normalized/sentiment-positive.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__sentiment-positive" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender