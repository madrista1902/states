import React from 'react';
import Profile from './Profile/Profile';

class App extends React.Component {
  state = {
    person: {
      fullName: 'Riadh',
      bio: 'Full Stack JS web developer',
      imgSrc: 'https://usa.bootcampcdn.com/wp-content/uploads/sites/108/2021/03/CDG_blog_post_image_01-850x412.jpg',
      profession: 'Back/Front End' 
    },
    show: false,
    mountTime: null,
    counter: 0,
  }

  componentDidMount() {
    this.setState({ mountTime: Date.now() });
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  }

  render() {
    const { person, show, mountTime, counter } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {show && <Profile person={person} />}
        {mountTime && <p>we are welcome to my profile {counter} seconds.</p>}
      </div>
    );
  }
}

export default App;
