import {h} from "preact";
import style from './style.css';
import styled, {css} from "styled-components";
import {useEffect, useRef} from "preact/compat";
import {refStyle} from "../../utils";


type MyEvent = Omit<Event, 'target'> & { target: HTMLElement }
export let debug = true;
const Logo = (params: any) => {
    // const justStyle = css.big`
    //   background: red;
    // `
    //
    // const justStyleTwo = css`
    //   padding-bottom: 10px;
    // `

    let classList = ['logo-containerView']

    const LogoWrap = styled.div`
      width: 100%;
      height: 100%;
    `

    const LogoImg = styled.img`
      max-height: 100%;
      max-width: 100%;
      object-fit: contain;
    `

    // let StyledLogo = styled.styledLogo`
    //     width: 80%;
    // `

    // let lol = ({target}: MyEvent) => {
    //     target.style.border = '1px solid red'
    //     console.log(`I received ${target}, ${self}`)
    // }

    // let start = () => {
    // }
    let logoWrap = useRef(null)
    let logoImg = useRef(null)
    useEffect(() => {
        // refStyle(logoWrap).border = '1px solid red'
    })
    let testclass = ''
    if (params.data.logoPosition || params.data.logoPositionExtra) {
        testclass = `logo-align-${(params.data.logoPosition || params.data.logoPositionExtra)}`
        classList.push(testclass)
    }
    debug && console.log()
    let q = style // пинаем чтобы style подгрузился в head

    return (
        <LogoWrap className={[...classList, 'test']} ref={logoWrap}>
            <LogoImg
                // onClick={lol}
                // onPageLoad={start()}
                className='logo'
                src={params.data.logoImageURL}
                ref={logoImg}
            />
        </LogoWrap>
    )
}

export default Logo

// logoPosition: StringField('Logo position').allow(['center', 'left', 'right']),
// logoPositionMobile: StringField('Logo position').allow(['desktop', 'center', 'left', 'right']),
// logoSize: NumberField('Logo size'),
// logoSizeMobile: NumberField('Logo size on mobile'),
//
// logoPositionExtra: StringField('Logo position extra').allow(['center', 'top', 'bottom', 'left', 'right', 'right-top', 'right-bottom', 'left-top', 'left-bottom']),
// logoPositionMobileExtra: StringField('Logo position extra on mobile').allow(['desktop', 'center', 'top', 'bottom', 'left', 'right', 'right-top', 'right-bottom', 'left-top', 'left-bottom']),
//
// extraLogoImageURL: StringField('Extra logo image').url(),