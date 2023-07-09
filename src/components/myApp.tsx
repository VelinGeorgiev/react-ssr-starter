
import React, { Component, useEffect, useState } from "react";


export default class MyApp extends Component {

    componentDidMount() {
        console.log('Works!')
    }

    render() {
        return <>Hello world 123</>;
    }
}

// Still can't recognize the React.FC type, threated as plain js function
// const MyApp: React.FC = () => {

//     React.useEffect(()=> {
//         console.log('Works!');
//     }, [])

//     return (<React.Fragment>Hello world 123</React.Fragment>)
// }