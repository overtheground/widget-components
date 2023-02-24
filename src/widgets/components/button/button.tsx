import {h} from "preact";
import style from './style.css';
import styled, {css} from "styled-components";
import {useEffect, useRef} from "preact/compat";


export let debug = true;
export const Button = (params: any) => {
    let ButtonDiv = styled.div`
    `

    return (
        <ButtonDiv>
            <a href={params.data.myButton.url}>
                {params.data.myButton.title}
            </a>
        </ButtonDiv>
    )
}