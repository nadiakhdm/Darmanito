import React, { useEffect } from 'react'
import WOW from 'wowjs';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HomeWrap } from './components/Home'
import { ContactWrap } from './components/Contact'
import { Footer, Header, ScrollToTop } from './components'
import { AboutWrap } from './components/About'
import { PharmacyWrap } from './components/Pharmacy'

export default function App() {

  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])

  return (
    <>
  
        <ScrollToTop />
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={HomeWrap} />
            <Route exact path="/contact" component={ContactWrap} />
            <Route exact path="/aboutus" component={AboutWrap} />
            <Route exact path="/pharmacy" component={PharmacyWrap} />
          </Switch>
          <Footer />

        </BrowserRouter>



      </>
  )
}
