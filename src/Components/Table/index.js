import Row from "../Row"

export default function Table(props){
    const {users,handleDeleteClick} = props
      return (
        <table className="container-item">
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
          </tr>
          {users.map(({name,email},index) =>{
            return <Row 
                      name={name} 
                      email={email} 
                      index={index} 
                      handleDeleteClick={handleDeleteClick}/>
            }
          )}
      </table>
      );
  }