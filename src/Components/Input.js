export const Input = (props) => {
    const {value, setValue, type = "string"} = props

    const onChangeHandler = (event) => {
        const value = event.target.value
        setValue(value)
    }

    return <input value={value} onChange={onChangeHandler} type={type}  />
}