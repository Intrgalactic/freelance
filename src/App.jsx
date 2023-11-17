import { useEffect, useRef, useState } from 'react'
import Header from './layouts/header/header'
import Hero from './layouts/hero/hero'
import Apps from './components/apps'
import soundwave from 'src/assets/images/sound-wave.svg';
import Introduction from './layouts/introduction/introduction';
import { useWindowScroll } from '@uidotdev/usehooks';
import Contact from './layouts/contact/contact';

function App() {
  const [headerToggled,setHeaderToggled] = useState(false);
  const headerRef = useRef();
  const [{x,y},scrollTo] = useWindowScroll();

  useEffect(() => {
    if (y > 100 && headerToggled === false) {
      setHeaderToggled(true);
    }
    else if (y < 100){
      setHeaderToggled(false);
    }
  },[y]);

  useEffect(() => {
    headerRef.current.classList.toggle('active-header');
  },[headerToggled])

  return (
    <>
      <Header ref={headerRef} />
      <Hero />
      <Apps />
      <div className='sound-wave'>
        <img src={soundwave} alt="sound wave" />
      </div>
      <Introduction/>
      <Contact/>
    </>
  )
}

export default App
