import React from 'react';
import Header from './komponen/header'
import MateriPembelajaran from './komponen/MateriPembelajaran';
import GantiMateri from './komponen/GantiMateri';



export default class Web extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <MateriPembelajaran Materi="Html&Css dibawah ini"/>
                <GantiMateri />
            </div>
        )
    }
}