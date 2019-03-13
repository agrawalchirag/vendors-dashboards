import React from 'react';

const authUser = WrappedComponent => {
  return class AuthUser extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        authToken: localStorage.getItem('authToken')
      };
    }

    render() {
      if (!localStorage.getItem('authToken')) {
        this.props.history.push('/');
        return null;
      };

      return <WrappedComponent {...this.props} />;
    }
  };
}

export default authUser;
