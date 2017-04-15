// React
import React from 'react';
import Formulaire from './Formulaire';
import Message from './Message';

class App extends React.Component {

  state = {
    messages: {}
  }

  addMessage = (message) => {
    // Copier le state
    const messages = {...this.state.messages}
    // Ajout du message avec clé timestamp
    const timestamp = Date.now();
    messages[`message-${timestamp}`] = message;
    // Mise à jour du state
    this.setState({ messages });
  };

  render() {
    return (
      <div className="box">
        <div>
          <div className="messages">
            <Message pseudo={this.props.params.pseudo}/>
          </div>
          <Formulaire addMessage={this.addMessage} pseudo={this.props.params.pseudo} length="170" />
        </div>
      </div>
      );
  }
}

export default App;
