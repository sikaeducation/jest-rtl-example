const FormInput = ({ label, value, setValue}) => {
  const handleChange = event => {
    setValue(event.target.value)
  }

  return (
    <>
      <label htmlFor="some-input">{label}</label>
      <input type="number" id="some-input" value={value} onChange={handleChange} />
    </>
  )
}

export default FormInput
