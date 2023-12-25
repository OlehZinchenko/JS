export const Input = (props) => {
    const {value, setValue, type = "string", min="number", max= "number"} = props

    const onChangeHandler = (event) => {
        const value = event.target.value
        setValue(value)
    }

    return <input value={value} onChange={onChangeHandler} type={type} min={min} max={max} />
}
