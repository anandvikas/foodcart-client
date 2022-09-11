// ----------------------------------------------------------------------
export const RenderInputFields = ({ inputFields }) => {
  return (
    <>
      {inputFields.map((val, index) => {
        return (
          <val.component
            key={index}
            type={val.type}
            name={val.name}
            onChange={val.onchange}
            value={val.value}
            options={val.options}
            placeholder={val.placeholder}
            required={val.required}
          />
        );
      })}
    </>
  );
};
// ----------------------------------------------------------------------
export const Input = ({
  type,
  name,
  onChange,
  value,
  placeholder,
  required,
}) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};
// ----------------------------------------------------------------------
export const Select = ({ type, name, onChange, value, options }) => {
  return (
    <div>
      <select name={name} value={value} onChange={onChange}>
        {options.map((val, index) => {
          return (
            <option key={index} value={val.opValue}>
              {val.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};
// ----------------------------------------------------------------------
export const Button = ({ type, value }) => {
  return (
    <div>
      <input type={type} value={value} />
    </div>
  );
};
// ----------------------------------------------------------------------
export const CheckBox = ({ name, type, placeholder, onChange }) => {
  return (
    <div>
      {placeholder} : <input type={type} onChange={onChange} name={name} />
    </div>
  );
};
