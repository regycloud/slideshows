import React from 'react'
// JSX
import HeroSlider, {
  Slide,
  Nav,
  AutoplayButton
} from 'hero-slider'
import Wrapper from '../UI/Wrapper/Wrapper'
import Title from '../UI/Title/Title'

const imgs = [];
for(let i = 1; i <= 16; i++) {
  imgs.push(require(`../../assets/Slide${i}.jpeg`));
}

// Images
const kyoto = 'https://i.imgur.com/xw5Abku.jpg'
const tenryuJiTemple = 'https://i.imgur.com/g5JNdYL.jpg'
const hakone = 'https://i.imgur.com/Iq6XtFR.jpg'
const byodoInTemple = 'https://i.imgur.com/le9OeEC.jpg'

const app = () => {
  return (
    <HeroSlider
      slidingAnimation='left_to_right'
      orientation='horizontal'
      set
      initialSlide={1}
      style={{
        backgroundColor: '#000'
      }}
      settings={{
        slidingDuration: 500,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: false,
        autoplayDuration: 2000,
        height: '100vh'
      }}>
      <Wrapper>
        <Title>
          Autoplay Button Slider
        </Title>
      </Wrapper>
      <AutoplayButton />

      {imgs.map((content, index) => 
        <Slide
          key={index} background={{
            backgroundImage: content,
          }}
         />
      )}

      {/* <Slide
        shouldRenderMask
        background={{
          backgroundColor: '#8A8A8A',
          maskBackgroundBlendMode: 'luminosity',
          backgroundImage: kyoto,
          backgroundAnimation: 'fade'
        }} />

      <Slide
        shouldRenderMask
        background={{
          backgroundColor: '#8A8A8A',
          maskBackgroundBlendMode: 'luminosity',
          backgroundImage: tenryuJiTemple,
          backgroundAnimation: 'fade'
        }} />

      <Slide
        shouldRenderMask
        background={{
          backgroundColor: '#8A8A8A',
          maskBackgroundBlendMode: 'luminosity',
          backgroundImage: hakone,
          backgroundAnimation: 'fade'
        }} />

      <Slide
        shouldRenderMask
        background={{
          backgroundColor: '#8A8A8A',
          maskBackgroundBlendMode: 'luminosity',
          backgroundImage: byodoInTemple,
          backgroundAnimation: 'fade'
        }} /> */}

      <Nav />
    </HeroSlider>
  )
}

export default app
