import React from "react"
type Props = {
    Title : string,
    Options :any[],
    ChangeFuncion : any
}
const SelectFrom = (props : Props)=>{
    const {Title,Options,ChangeFuncion}  = props
    const onChangeSelect = (e:any)=>{
        ChangeFuncion(e.target.value)
    }
    return  <div>
         <label htmlFor="">{Title} </label>
                <select name="" id="" onChange={(e)=>onChangeSelect(e)} >
                    {Options? Options.map((e)=>{
                        return (
                            <option value={e.value}> {e.label} </option>
                        )
                    }) :""}      
                 </select>
             </div>
}
export default SelectFrom