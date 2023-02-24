import {h} from "preact";
import style from './style.css';
import styled, {css} from "styled-components";
import {useEffect, useRef} from "preact/compat";

export let debug = true;
export const ContainerView = (params: any) => {
    let WrapDiv = styled.div`
        ${params.styles}
    `

    return (
        <WrapDiv className={'container-view'}>
            {params.children}
        </WrapDiv>
    )
}