
import React, { Component, useEffect, useState } from "react";


export default class MyApp extends Component {

    componentDidMount() {
        console.log('Works!')
    }

    render() {
        return <>Hello world 123</>;
    }
}

// Can't recognize the type, threated as plain js function
// const MyApp = () => {

//     React.useEffect(()=> {
//         console.log('Works!');
//     }, [])

//     return (<React.Fragment>Hello world 123</React.Fragment>)
// }