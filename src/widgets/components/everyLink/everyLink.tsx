import {h} from "preact";
import style from './style.css';
import styled, {css} from "styled-components";
import {useEffect, useRef} from "preact/compat";

export let debug = true;
export const EveryLink = (params: any) => {
    let EveryLinkDiv = styled.div`
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 80;
    `
    return (
        <EveryLinkDiv className='every-link'>
            {params.children}
        </EveryLinkDiv>
    )
}