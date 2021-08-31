export default function Row(props){
    const {name,email,index,handleDeleteClick} = props;
    return(
    <tr key={index}>
        <td>{index}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td><button className = "btn btn-outline-danger" id={index} onClick={handleDeleteClick}>X</button></td>
    </tr>
    );
}