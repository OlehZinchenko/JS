export const Input = (props) => {
    const {value, setValue, type = "number", min, max} = props

    const onChangeHandler = (event) => {
        let value = event.target.value
        if (max !== undefined && value > max) {
            value = max
        }
        if (min !== undefined && value < min) {
            value = min
        }
        setValue(value)
    }

    return <input value={value} onChange={onChangeHandler} type={type} min={min} max={max}/>
}