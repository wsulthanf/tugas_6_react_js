import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
import MenuMakanan from './page/menumakanan'
import MenuMinuman from './page/menuminuman'
import Kontak from './page/kontak'


export default function approute() {
    return (
        <Router>
            <div>
                <Route path="/" exact component={App} />
                <Route path="/menu_makanan" component={MenuMakanan} />
                <Route path="/menu_minuman" component={MenuMinuman} />
                <Route path="/kontak" component={Kontak} />
            </div>
        </Router>
    )
    
}
