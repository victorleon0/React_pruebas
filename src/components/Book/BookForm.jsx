import {useState} from 'react';

const INITIAL_BOOK = {
    title: 'El guardian entre el centeno',
    author: 'J.D Sallinger'
}

const BookForm = ({newBook}) => {

    const [book, setBook] = useState(INITIAL_BOOK);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setBook({...book, [name]:value});
    }
    const handleSubmit = (ev) => {
        ev.preventDefault();
        newBook(book);
    }

  return (
    <form onSubmit={handleSubmit}>
        <fieldset>
            <label>
                <span>Title</span>
                <input type="text" name="title" value={book.title} onChange={handleChange} /> 
            </label>
            <label>
                <span>Author</span>
                <input type="text" name="author" value={book.author} onChange={handleChange} /> 
            </label>
            <button>Send</button>
        </fieldset>

    </form>
  )
}

export default BookForm
