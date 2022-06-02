const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    
    },
    
    {
        id: 2,
        nombre: 'Linda'
    
    },
    
    {
        id: 3,
        nombre: 'Karen'
    
    },
    ];
    
    const salarios = [
        {
            id: 1,
            salario: 1000
        
        },
        
        {
            id: 2,
            salario: 1500
        
        },
 ];

 const getEmpleado = ( id )  => {

     return new Promise( (resolve, reject ) => {

        const empleado = empleados.find( e => e.id === id )?.nombre;
        ( empleado )  // Esta es una versión resumida de if else, incluso el return que pasó de estar abajo a arriba en return new promise
          ?  resolve ( empleado )               
          :  reject (`No existe empleado con id ${ id } `);
        
    });
         
}
const getSalario = ( id ) => {

    return new Promise( (resolve, reject ) => {
        
        const salario = salarios.find(s => s.id === id)?.salario;
        ( salario )
        ? resolve ( salario )
        : reject (`No existe salario con el ${ id }`);
    });
}

const id =1;

getEmpleado(id)
.then( empleado => {
    nombre = empleado; 
    return getSalario ( id )
})
.then ( salario => console.log ('El empleado:', nombre, 'Tiene un salario de', salario ))
.catch( err => console.log( err ) );       // Gracias al Catch nos salva de los errores por ej con el id 5, 6 y los q no están.