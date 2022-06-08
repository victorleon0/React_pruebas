const CharacterForm = (props) => { //Ponemos props aquí para pillar los datos de la funcion del archivo APP

    const submitCharacterForm = (event) => { //Evento Submit
        event.preventDefault(); //Poner siempre en un evento submit
        console.log(event.target.elements.name.value);
        console.log(event.target.elements.house.value);

    const data = {  // Con esto recogemos los datos que nos han puesto en el formulario en un array
        name: event.target.elements.name.value,
        house: event.target.elements.house.value
    };
    props.getCharacter(data);
    event.target.reset();
    };
    return (
        <form onSubmit={(submitCharacterForm)}>
            <p>Nombre del Mago</p>
            <input type="text" placeholder="Introduce el nombre" name="name"></input>
            <p>Casa en Hogwarts</p>
            <input type="text" placeholder="Introduce la casa" name="House"></input>
    
            <button type="submit">Enviar Personaje</button>
        </form>
    )

}

export default CharacterForm