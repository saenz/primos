import { Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap'
import Notification from './icons/notification'
import fetch from 'isomorphic-unfetch'
import { Alert } from 'reactstrap';

// function stringifyFormData(fd) {
//   const data = {};
//   for (let key of fd.keys()) {
//     data[key] = fd.get(key);
//   }
//   return JSON.stringify(data, null, 2);
// }

export default class Example extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      displayErrors : false,
      email: '',
      message: '',
      alertVisible: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDismissAlert = this.onDismissAlert.bind(this);
  }

  onDismissAlert() {
    this.setState({ alertVisible: false });
  }

  handleSubmit(event) {
    event.preventDefault();
    
    if (!event.target.checkValidity()) {
      console.log('form is invalid')
      this.setState({ displayErrors: true });
      return;
    }

    //const data = new FormData(event.target);
    
    this.setState({
      displayErrors: false,
      alertVisible: true,
      email: '',
      message: ''
      //res: stringifyFormData(data)
    });

    fetch('https://httpbin.org/post', {
      method: 'POST',
      body: {
        email: this.state.email,
        message: this.state.message
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log('This data was successfully received by the server:');
        console.log(data.form);
    });

  }

  handleChange(event) {
    console.log('handleChange called')
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({[name]: value});
  }

  render() {
    const { displayErrors, email, message } = this.state;
    const isEnabled = email.length > 0 && message.length > 0;

    return (
      <div>
      <Alert color="info" toggle={this.onDismissAlert} isOpen={this.state.alertVisible}>
        Your message has been sent.
      </Alert>

      <Form onSubmit={this.handleSubmit} noValidate className={displayErrors ? 'was-validated' : ''}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" value={this.state.email} placeholder="Your email..." onChange={this.handleChange} required/>
          <FormFeedback><Notification /> A valid email address must be entered</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Message</Label>
          <Input type="textarea" name="message" value={this.state.message} rows="5" placeholder="Your message..." onChange={this.handleChange} required/>
          <FormFeedback><Notification /> This field is required</FormFeedback>
        </FormGroup>

        <Button value="Submit" disabled={!isEnabled}>Submit</Button>

        {/*this.state.res && (
          <div className="res-block">
            <h3>Data to be sent:</h3>
            <pre>FormData {this.state.res}</pre>
          </div>
        )*/}
      </Form>
      
      <style jsx>{`
        .res-block {
          display: inline-block;
        }
      `}</style>
    </div>
    );
  }
}