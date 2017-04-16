// React
import React from 'react';
import Formulaire from './Formulaire';
import Message from './Message';
import base from '../base';

class App extends React.Component {

  state = {
    messages: {}
  }

  componentWillMount() {
    this.ref = base.syncState('/', {
      context: this,
      state: 'messages'
    });
  }

  addMessage = (message) => {
    // Copier le state
    const messages = {...this.state.messages}
    // Ajout du message avec clé timestamp
    const timestamp = Date.now();
    messages[`message-${timestamp}`] = message;
    // Supprimer les messages
    Object.keys(messages).slice(0, -10).map(key => messages[key] = null);
    // Mise à jour du state
    this.setState({ messages });
  };

  render() {

    const messages = Object
      .keys(this.state.messages)
      .map(key => <Message key={key} details={this.state.messages[key]} />)
    ;



    return (
      <div className="box">
        <div>
          <div className="messages">
            {messages}
          </div>
          <Formulaire addMessage={this.addMessage} pseudo={this.props.params.pseudo} length="170" />
        </div>
      </div>
      );
  }
}

export default App;
