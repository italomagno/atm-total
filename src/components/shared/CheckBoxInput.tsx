import { ChangeEvent } from "react"

type CheckBoxProps={
    name:String,
    isChecked:boolean
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void
}



export function CheckBoxInput({isChecked = true,name,onChange}:CheckBoxProps){
    return(
                    <div className="flex gap-4 w-[335px] justify-between">
                        <label className="w-1/3" >{name}</label>
                        <input className="w-1/3" type="checkbox" checked={isChecked} onChange={onChange} />
                   </div>
    )
}