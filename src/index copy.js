import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './components/app';

import './index.css';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 26
    }
  }
                  /*    state = {                 // такую надпись можно записать вместо конструктора
                        years: 26                 // Экспериментальная функция
                        }*/
  nextYear = () => {            // Обязательно стрелочная функция (такая возможность наз-ся classFields)
    this.setState(state => ({   // такая запись тоже обязательна
      years: ++state.years
    }))
  }
  render() {
    const {name, surname, link} = this.props
    const {years} = this.state;
    return (
      <>
      <button onClick={this.nextYear}>++</button>
        <h1>My name is {name}, surname - {surname}, years = {years}</h1>
        <a href={link}>My profile</a>
      </>
    )
  }
}




const All = () => {
  return (
    <>
    <WhoAmI name="John" surname="Smith" link="yandex.ru"/>
    <WhoAmI name="Leon" surname="Smith" link="facebook.com"/>
    <WhoAmI name="Bekky" surname="Smith" link="googlo.com"/>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <All/>
  </React.StrictMode>
);