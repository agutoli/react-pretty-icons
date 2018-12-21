import React from 'react';
import iconSvg from '../icons/normalized/twitter-retweet.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__twitter-retweet" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender