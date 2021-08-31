import "../../App.css" 
export default function Form(props){
    const {name,email,handleChange,handleClick} = props; 
    return (
    <form className="form container-item">
        <label className="form-item" htmlFor="nombre">Nombre</label><input type="text" name="name" value={name} onChange={handleChange}/>
        <label className="form-item" htmlFor="correo">Correo</label><input type="text" name="email" value={email}   onChange={handleChange}/>
        <button className="form-item btn btn-outline-success" onClick={handleClick}>agregar</button>
    </form>
    );
}