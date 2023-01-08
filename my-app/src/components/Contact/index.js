import './index.scss';

const Contact = () => {
    return(
        <div className="Container_contact">
            <h2 className="Header_contact">Contact</h2>
            <form>
                <label for="Name">Name</label>
                <input id="name" placeholder="Name"></input>
                <label for="Surame">Surname</label>
                <input id="surname" placeholder="Surname"></input>
                <label for="E-mail">E-mail</label>
                <input id="email" placeholder="Email"></input>
                <label for="E-mail">Message</label>
                <textarea placeholder="Message"></textarea>
            </form>
        </div>
    
    
    );}

export default Contact;