import Row from "../Row"

export default function Table(props){
    const {users,handleDeleteClick} = props
      return (
        <table className="container-item table table-striped">
          <thead>
            <tr>
              <th>Index</th>
              <th>Nombre</th>
              <th>Apellido</th>
            </tr>
          </thead>
          <tbody>
          {users.map(({name,email},index) =>{
            return <Row 
                      name={name} 
                      email={email} 
                      index={index} 
                      handleDeleteClick={handleDeleteClick}/>
            }
          )}
          </tbody>
      </table>
      );
  }