import React, { Component } from 'react'
import Header from './header'
import '../style/kontak.css'

export default class kontak extends Component {
    render() {
        return (
            <div id="kontak_bg">
                <Header />
                <div className="kontak">
                    <h3>
                        Jl. Swadaya IV, Pd. Rangon, Cipayung, Kota Jakarta Timur, Daerah Khusus Ibu Kota Jakarta, 13860 {""}
                    </h3>
                    <p>081312345678</p>
                </div>
            </div>
        )
    }
}
