import './index.scss';

const Contact = () => {
    return(
        <div className="Container_contact">
            <h2 className="Header_contact">Contact</h2>
            <form>
                <label for="Name">Name</label>
                <input type="text" id="name" placeholder="Name"></input>
                <label for="Surame">Surname</label>
                <input type="text" id="surname" placeholder="Surname"></input>
                <label for="E-mail">E-mail</label>
                <input type="text" id="email" placeholder="Email"></input>
                <label for="E-mail">Message</label>
                <textarea placeholder="Message"></textarea>
                <input type="submit" id="submit" value="Send"></input>
            </form>
        </div>
    
    
    );}

export default Contact;