import "./Input.css";

const Input = ({
label,
placeholder,
type="text",
value,
onChange
})=>{

return(

<div className="inputGroup">

<label>

{label}

</label>

<input

type={type}

placeholder={placeholder}

value={value}

onChange={onChange}

/>

</div>

)

}

export default Input;