import React from 'react';
import iconSvg from '../icons/normalized/voice-recorder.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__voice-recorder" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender