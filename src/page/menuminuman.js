import React, { Component } from 'react'
import Header from './header'
import DaftarMinuman from '../lib/daftarminuman'

export default class menuminuman extends Component {
    render() {
        return (
            <div>
                <Header />
                <h3>Daftar Minuman Favorite</h3>
                <table style={{width: "100%"}}>
                    <tbody>
                        <tr>
                            {DaftarMinuman.map((data, index) => {
                                return (
                                    <td key={index}>
                                        <center>
                                            <img src={data.gambar} alt="Product Minuman" width="150" height="100"/>
                                            <p>{data.namaMinuman}</p>
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
