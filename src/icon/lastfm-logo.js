import React from 'react';
import iconSvg from '../icons/normalized/lastfm-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__lastfm-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender