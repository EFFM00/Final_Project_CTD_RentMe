import React from 'react';
import iconFacebook from '../../assets/icon-facebook.svg';
import iconLinkedin from '../../assets/icon-linkedin.svg';
import iconTwitter from '../../assets/icon-twitter.svg';
import iconInstagram from '../../assets/icon-ig.svg';
import styled from 'styled-components';

function SocialMedia() {

    const SocilaMediaStyle = styled.div`
        background: transparent;
        display: flex;
        gap: 20px;
        justify-content: center;
        width: 165px;
    `

    // const IconStyle = styled.img`
    //   filter: brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(1%) hue-rotate(137deg) brightness(103%) contrast(101%);
    // `

  return (
    <SocilaMediaStyle>
        <img src={ iconFacebook }/>
        <img src={ iconLinkedin }/>
        <img src={ iconTwitter }/>
        <img src={ iconInstagram }/>
    </SocilaMediaStyle>
  )
}

export default SocialMedia