import { Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap'
import Notification from './icons/notification'

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Your email..." />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Message</Label>
          <Input type="textarea" name="message" id="messageText" placeholder="Your message..." invalid />
          <FormFeedback><Notification /> Sweet! that name is available</FormFeedback>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}