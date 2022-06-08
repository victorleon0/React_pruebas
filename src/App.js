import './app.scss';
import Contador from './components/Contador/Contador';
import InputText from './components/UseState';
import Form from './components/Form/Form';
import Darkmode from './components/DarkMode/Darkmode';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MovieContainer from './components/Movies/MovieContainer';
import Book from './components/Book/Book';
import BookForm from './components/Book/BookForm';
import { useState } from 'react';


function App() {

  const movies = [
    {
      name: "Blade Runner",
      director: "Steven Spielberg",
      duration: 90,
    },
    {
      name: "Titanic",
      director: "James Cameron",
      duration: 120,
    },
    {
      name: "Pulp Fiction",
      director: "Tarantino",
      duration: 140,
    },
  ];

  const [info, setInfo] = useState([{name:'Sergio', phone:'600600600', email:'sergio@gmail.com'}]);

  const addNewInfo = (newInfo) => {
    setInfo([...info, newInfo]);
  }
  
  let name = 'pepe';
  let surname = 'perez';

  let myArray = ["pera", "naranja", "melon"];

  let myArray2 = [32, 43, 12, 123];

  const books = [
    {
      title: 'El guardian entre el centeno',
      author: 'J.D Sallinger'
    },{
      title: 'El señor de los anillos',
      author: 'Tolkien'
    },{
      title: 'Guerra y paz',
      author: 'Tolstoi'
    },{
      title: 'El jugador',
      author: 'Dostoyevski'
    },{
      title: 'El extranjero',
      author: 'Camus'
    }
  ]


  const [bookInfo, setBookInfo] = useState(books);

  const addBook = (newBook) => {
    setBookInfo([...bookInfo, newBook]);
  }

  const sayHello = () => {
    console.log("hellooooo");
  }



  return (
    <div className="app">
      <InputText/>
      <Header/>
        {info.length > 0 && info.map((contact) => {
          return (
            <>
              <p>{contact.name}</p>
              <p>{contact.phone}</p>
              <p>{contact.email}</p>
            </>
          )
        })}
        <Form addNewInfo={addNewInfo}/>



        {bookInfo.length > 0 && bookInfo.map((book) => {
          return <Book {...book}/>
        })}
        <BookForm newBook={addBook}/>
        <Contador />
        <Darkmode />

        <MovieContainer movies={movies}/>
        {/* <MovieContainer />
        <Header name={name} surname={surname}/>
        <List myArray={myArray2}/>
        {books.length > 0 && books.map((book) => {
          return <Book {...book}/>
        })}
        <Footer pepe={sayHello}>
          <List myArray={myArray}/>
        </Footer> */}
      <Footer/>
    </div>
  );
}

export default App;
