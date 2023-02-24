import {h, Fragment} from "preact"
import Grids from "./types/grids";
import WidgetTypes from "./WidgetTypes"
import styled from "styled-components";

const SampleWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const WidgetPreview = () => (
    <SampleWrap>
        <WidgetTypes/>
    </SampleWrap>
)

export const SamplePage = (data: any) => (
    <div>
        <h1>Sample Page</h1>

        <WidgetPreview/>
    </div>
)

