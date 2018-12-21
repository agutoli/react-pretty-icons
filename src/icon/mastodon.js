import React from 'react';
import iconSvg from '../icons/normalized/mastodon.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__mastodon" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender