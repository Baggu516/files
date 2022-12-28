import './App.css';
import Contacts from './Contacts';
import Card from './Card';

function Cardpass(contact){
  return(
    <Card 
    key={contact.id}
    name={contact.name}
    img={contact.img}
    tele={contact.tele}/>

  )
}

function App() {
  return (
    <div className="card">
      <h1>
        mycontacts
      </h1>
      {Contacts.map(Cardpass)}
    </div>

  );
}

export default App;
