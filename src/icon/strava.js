import React from 'react';
import iconSvg from '../icons/normalized/strava.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__strava" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender