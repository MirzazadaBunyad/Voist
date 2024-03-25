function InputK(props) {
  const { type, name, placeholder, value, onChange } = props;

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default InputK;
