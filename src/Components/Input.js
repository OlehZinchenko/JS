export const Input = (props) => {
    const {value, setValue, type = "number"} = props

    const onChangeHandler = (event) => {
        const value = event.target.value
        setValue(value)
    }

    return <input value={value} onChange={onChangeHandler} type={type} min={0}/>
}