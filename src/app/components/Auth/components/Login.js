import {Component} from 'react'
import {observer} from 'mobx-react';
import {AuthStore} from '../index'
import Card from 'material-ui/lib/card/card';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import TextField from 'material-ui/lib/text-field';

@observer
export class Login extends Component {
  handleSubmit(event) {
    event.preventDefault();

    const user = this.refs.user.value;
    const pass = this.refs.pass.value;
    AuthStore.login(user, pass);
  }

  render() {
    return <Card>
      <CardTitle
          title="Login"
      />
      <CardText>
        <form onSubmit={this.handleSubmit}>
          <TextField
              floatingLabelText="User Name"
              defaultValue="dror"
              ref="user"
          />
          <TextField
              floatingLabelText="Password (hint: dror)"
              defaultValue="dror"
              ref="pass"
          />
        </form>
      </CardText>
    </Card>
  }
}
