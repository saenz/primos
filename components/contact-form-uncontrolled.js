import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap'
import Notification from './icons/notification'

function stringifyFormData (fd) {
  const data = {}
  for (let key of fd.keys()) {
    data[key] = fd.get(key)
  }
  return JSON.stringify(data, null, 2)
}

// eslint-disable-next-line no-undef
export default class Example extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      wasValidated: false,
      email: '',
      message: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    console.log('inside handleSubmit')
    alert('A name was submitted: ' + this.state.email)

    event.preventDefault()
    event.stopPropagation()

    if (!event.target.checkValidity()) {
      console.log('form is invalid')
      this.setState({ wasValidated: true })
      return
    }

    const data = new FormData(event.target)

    this.setState({
      wasValidated: false,
      res: stringifyFormData(data)
    })

    // fetch('/api/form-submit-url', {
    //   method: 'POST',
    //   body: data,
    // });

    // fetch('https://httpbin.org/post', {
    //   method: 'POST',
    //   body: data,
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log('This data was successfully received by the server:');
    //     console.log(data.form);
    // });
  }

  handleChange (event) {
    console.log('handleChange called')
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({[name]: value})
  }

  render () {
    const { wasValidated, email, message } = this.state
    const isEnabled = email.length > 0 && message.length > 0

    return (
      <Form onSubmit={this.handleSubmit} noValidate className={wasValidated ? 'was-validated' : ''}>
        <FormGroup>
          <Label for='exampleEmail'>Email</Label>
          <Input type='email' name='email' value={this.state.email} placeholder='Your email...' onChange={this.handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label for='exampleText'>Message</Label>
          <Input type='textarea' name='message' placeholder='Your message...' onChange={this.handleChange} required />
          <FormFeedback><Notification /> This field is required</FormFeedback>
        </FormGroup>

        <Button value='Submit' disabled={!isEnabled}>Submit</Button>

        {this.state.res && (
          <div className='res-block'>
            <h3>Data to be sent:</h3>
            <pre>FormData {this.state.res}</pre>
          </div>
        )}

        <style jsx>{`
          .displayErrors input:invalid {
            border-color: red;
          }
          .res-block {
            display: inline-block;
          }
        `}</style>

      </Form>
    )
  }
}
