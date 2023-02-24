import {h, Fragment} from "preact"
import Logo from "../components/logo/logo";
import styled from "styled-components";
import {EveryLink} from "../components/everyLink/everyLink";
import {ContentWrap} from "../components/contentWrap/contentWrap";
import {ContainerView} from "../components/containerView/containerView";
import {Button} from "../components/button/button";
import {TinySlider} from "../components/tinySlider/tinySlider";
import {BackgroundImage} from "../components/backgroundImage/backgroundImage";
import {Banner} from "../components/banner/banner";
import {Title} from "../components/title/title";
import {Subtitle} from "../components/subtitle/subtitle";

let forms = [
    'mobile-300x250',
    'desktop-300x250',
    'desktop-970x250'
]

const Grids = (data: any) => {
    // return (
    //     <p>WORK111!</p>
    // )
    // let width, height
    console.log('meow', data.form)
    if (forms.includes(data.form)) {
        // [width, height] = data.dimensions.split('x')
    } else {
        console.log('Form err')
        return <p>Form error</p>
    }

    return (
        <Banner>
            <EveryLink/>
            <ContentWrap data={data} restrictMaxWidth={false}>
                <ContainerView class={''} width={''} height={''} padding={''} margin={''} styles={`
                        width: 23.7%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        font-weight: 700;
                        box-sizing: border-box;
                        overflow: hidden;
                        position: relative;
                        padding: 30px;
                        text-transform: uppercase;
                        letter-spacing: 0.1em;
                        line-height: 1.38;`}>
                    <Logo data={data}/>
                    <Title data={data}/>
                    <Subtitle data={data}/>
                    <Button data={data}/>
                </ContainerView>
                <BackgroundImage data={data}/>
                <TinySlider data={data}/>
            </ContentWrap>
        </Banner>
    )
}

export default Grids