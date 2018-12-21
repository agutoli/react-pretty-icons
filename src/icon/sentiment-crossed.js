import React from 'react';
import iconSvg from '../icons/normalized/sentiment-crossed.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__sentiment-crossed" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender