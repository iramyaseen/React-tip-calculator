function FromGroup(props) {
  const { label, type, placeholder, changeHandler, ...otherInputAttributes } = props;

  return (
    <div className="form-group">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} onChange={changeHandler} {...otherInputAttributes} />
    </div>
  );
}

export default FromGroup;
