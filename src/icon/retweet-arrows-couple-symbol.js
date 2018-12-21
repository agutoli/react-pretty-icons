import React from 'react';
import iconSvg from '../icons/normalized/retweet-arrows-couple-symbol.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__retweet-arrows-couple-symbol" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender