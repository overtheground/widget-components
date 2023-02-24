import {h} from "preact";
import style from './style.css';
import styled, {css} from "styled-components";
import {useEffect, useRef} from "preact/compat";


export let debug = true;
export const Title = (params: any) => {
    let TitleDiv = styled.div`
    `

    return (
        <TitleDiv className='title'>
            <p>
                {params.data.title}
            </p>
        </TitleDiv>
    )
}