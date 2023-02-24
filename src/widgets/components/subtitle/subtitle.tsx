import {h} from "preact";
import style from './style.css';
import styled, {css} from "styled-components";
import {useEffect, useRef} from "preact/compat";


export let debug = true;
export const Subtitle = (params: any) => {
    let SubtitleDiv = styled.div`
    `

    return (
        <SubtitleDiv className='subtitle'>
            <p>
                {params.data.title}
            </p>
        </SubtitleDiv>
    )
}