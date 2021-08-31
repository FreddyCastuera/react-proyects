export default function Row(props){
    const {name,email,index,handleDeleteClick} = props;
    return(
    <tr key={index}>
        <td>{name}</td>
        <td>{email}</td>
        <td><button id={index} onClick={handleDeleteClick}>X</button></td>
    </tr>
    );
}