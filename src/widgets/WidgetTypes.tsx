import {h, Fragment} from "preact"
import Grids from "./types/grids";
import Sepia from "./types/sepia";
import {mockUpData} from "./mockupData";


let allTypes = {
    grids: Grids,
    sepia: Sepia
}

let formsOfType = {
    grids: ['mobile-300x250', 'desktop-300x250', 'desktop-970x250'],
    sepia: ['desktop-393x600', 'mobile-393x600'],
}

let opts: Partial<CSSStyleDeclaration> = {
    background: "#FFFFFF",

}

let data: any = {
    form: '300x600'
}

let showType = 'grids' // type or 'all' || mobile-300x250
let specialSize = 'desktop-970x250'

const WidgetTypes = () => {
    if (showType != 'all') {
        if (specialSize) {
            // @ts-ignore
            formsOfType = {[showType]: [specialSize]}
        } else {
            // @ts-ignore
            formsOfType = {[showType]: formsOfType[showType]}
        }
    }
    let res: h.JSX.Element[] = []
    Object.keys(formsOfType).forEach((type) => {
        // @ts-ignore
        console.log(type)
        // @ts-ignore
        for (let form of formsOfType[type]) {
            console.log('q', form)
            let [device, dimensions] = form.split('-')
            console.log('w', dimensions)
            let width, height
            [width, height] = dimensions.split('x')

            data = mockUpData.find(m => (m.widgetType == type && m.form == form))
            let widgetWrap = []
            widgetWrap.push(<h2>{type} {form}</h2>)
            // @ts-ignore
            widgetWrap.push(allTypes[type]({
                    ...data,
                    width: width,
                    height: height
                }))
            res.push(<div style={`display: flex; flex-direction: column; margin: 10px; width: ${width}px; height: ${height}px`}>
                {widgetWrap}
            </div>)
        }
        res.push(<hr style='width: 100%; margin: 50px'/>)
    })
    return (<>{res}</>)


    // @ts-ignore
    // for (let form of showType == 'all' ? allTypes : allTypes[showType]) {
    //     console.log('q')
    //     // @ts-ignore
    //     for (let size of formsOfType[form.key]) {
    //         console.log('q')
    //     }
    // }
}

// { allTypes.map(type => {
//     for (let form of formsOfType[type])
//         }
//     type({
//         ...data,
//
//     })
// )}


export default WidgetTypes