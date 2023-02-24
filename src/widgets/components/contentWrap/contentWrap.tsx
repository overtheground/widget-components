import {h} from "preact";
import style from './style.css';
import styled, {css} from "styled-components";
import {useEffect, useRef} from "preact/compat";


export let debug = true;
export const ContentWrap = (params: any) => {
    let ContentWrapDiv = styled.div`
      display: flex;
      max-width: ${params.restrictMaxWidth ? params.data.width + 'px' : 'unset'};
      width: 100%;
    `

    return (
        <ContentWrapDiv className={'content-containerView'}>
            {params.children}
        </ContentWrapDiv>
    )
}