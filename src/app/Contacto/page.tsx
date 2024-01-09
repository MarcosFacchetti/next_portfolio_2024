"use client"
import React, { useEffect } from 'react';
import './Cubo_3D.css';

function Cubo(): JSX.Element {
  useEffect(() => {
    const handleMailClick = (): void => {
      window.location.href = 'mailto:m-trabajo@hotmail.com';
    };

    const handleWhatsAppClick = (): void => {
      window.open('https://wa.me/3413025312', '_blank');
    };

    const handleGitHubClick = (): void => {
      window.open('https://github.com/MarcosFacchetti?tab=repositories', '_blank');
    };

    const handleLinkedInClick = (): void => {
      window.open('https://www.linkedin.com/in/marcos-facchetti-460030237/', '_blank');
    };

    const frontFace = document.querySelector('.face.front');
    const backFace = document.querySelector('.face.back');
    const leftFace = document.querySelector('.face.left');
    const rightFace = document.querySelector('.face.right');

    frontFace?.addEventListener('click', handleMailClick);
    backFace?.addEventListener('click', handleLinkedInClick);
    leftFace?.addEventListener('click', handleWhatsAppClick);
    rightFace?.addEventListener('click', handleGitHubClick);

    return () => {
      // Clean up event listeners when the component unmounts
      frontFace?.removeEventListener('click', handleMailClick);
      backFace?.removeEventListener('click', handleLinkedInClick);
      leftFace?.removeEventListener('click', handleWhatsAppClick);
      rightFace?.removeEventListener('click', handleGitHubClick);
    };
  }, []);

  return (
    <div className="Cubo">
      <div className="cube_3d">
        <div className="face front">Mail</div>
        <div className="face back">LinkedIn</div>
        <div className="face left">WhatsApp</div>
        <div className="face right">GitHub</div>
        <div className="face top"></div>
        <div className="face bottom"></div>
      </div>
    </div>
  );
}

export default Cubo;
