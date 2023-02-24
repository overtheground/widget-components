import {h, Fragment} from "preact"
import Logo from "../components/logo/logo";
import styled from "styled-components";

let forms = [
    'desktop-393x600',
    'mobile-393x600'
]

const Sepia = (data: any) => {
    // return (
    //     <p>WORK111!</p>
    // )
    let width
    let height
    console.log('meow', data.form)
    if (forms.includes(data.form)) {
        [width, height] = data.dimensions.split('x')
    } else {
        console.log('Form err')
        return <p>error</p>
    }

    const Banner = styled.div`
        width: ${width}px;
        height: ${height}px;
        border: 1px solid grey;
    `

    return (
        <Banner className='banner'>
            <Logo data={data}/>
        </Banner>
    )
}

export default Sepia