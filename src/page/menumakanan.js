import React, { Component } from 'react'
import Header from './header'
import DaftarMakanan from '../lib/daftarmakanan'

export default class menumakanan extends Component {
    render() {
        return (
            <div>
                <Header />
                <h3>Daftar Makanan Favorite</h3>
                <table style={{width: "100%"}}>
                    <tbody>
                        <tr>
                            {DaftarMakanan.map((data, index) => {
                                return (
                                    <td key={index}>
                                        <center>
                                            <img src={data.gambar} alt="Product Makanan" width="150" height="100"/>
                                            <p>{data.namaMakanan}</p>
                                            <p>Harga: Rp. {data.harga}</p>
                                        </center>
                                    </td>
                                )
                            })}
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
