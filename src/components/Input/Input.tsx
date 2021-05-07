import React from 'react'

interface IProps {
    placeholder: string,
    value: string,
    onChange: (value: string) => void;
}

export const Input: React.FC<IProps> = ({placeholder, value, onChange}) => {
    return (
        <input role="input" value={value} onChange={(e) => onChange(e.target.value)} type="text" placeholder={placeholder} className={"input"}/>
    )
}
