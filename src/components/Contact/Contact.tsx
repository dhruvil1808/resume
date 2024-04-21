import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me here.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:dhruvilpatel2002@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:dhruvilpatel2002@gmail.com">dhruvilpatel2002@gmail.com</a>
        </div>
        <div>
        <a href="tel:+917045963959"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+917045963959">(+91) 7045963959</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}