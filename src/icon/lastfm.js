import React from 'react';
import iconSvg from '../icons/normalized/lastfm.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__lastfm" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender