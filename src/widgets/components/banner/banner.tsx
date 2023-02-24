import {h} from "preact";
import style from './style.css';
import styled, {css} from "styled-components";
import {useEffect, useRef} from "preact/compat";
import {refStyle} from "../../utils";


export let debug = true;
export const Banner = (params: any) => {
    let BannerDiv = styled.div`
      display: flex;
      box-sizing: border-box;
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 100%;
      font-family: Helvetica, Arial, sans-serif;
      font-size: 16px;
      flex-direction: ${params.direction ?? 'row'};
    `

    return (
        <BannerDiv className='banner'>
            {params.children}
        </BannerDiv>
    )
}