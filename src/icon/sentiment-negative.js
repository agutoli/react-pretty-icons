import React from 'react';
import iconSvg from '../icons/normalized/sentiment-negative.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__sentiment-negative" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender