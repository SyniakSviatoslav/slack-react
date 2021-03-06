import React from "react";
import {Grid, Form, Segment, Button, Header, Message, Icon} from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

class Login extends React.Component{
    
    state={
        email:"",
        password:"",
        errors:[],
        loading:false
    };
 

    displayErrors = errors => errors.map((error, i)=><p key={i}>{error.message}</p>)

    handleChange = event => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = async event => {
        event.preventDefault();
        if (this.isFormValid(this.state)) {
            const auth = getAuth()
          console.log(this.state.password)
          this.setState({ errors: [], loading: true });
         signInWithEmailAndPassword(auth, this.state.email, this.state.password)
            .then(signedInUser => {
              console.log(signedInUser);
            })
            .catch(err => {
              console.error(err);
              this.setState({
                errors: this.state.errors.concat(err),
                loading: false
              });
            });
        }
      };

    isFormValid = ({ email, password }) => email && password

    handleInputError = (errors, inputName) =>{
      return errors.some(error=>
        error.message.toLowerCase().includes(inputName)
        )? 'error' : ""
    };

    render(){
        const { email, password, errors, loading} = this.state;


        return (
            <Grid textAlign="center" verticalAlign="middle" className="app">
                <Grid.Column style={{maxWidth:450}}>
                    <Header as="h1" icon color="violet" textAlign="center">
                        <Icon name="code branch" color="violet"/>
                        Login to DevChat
                    </Header>
                    <Form size="large" onSubmit={this.handleSubmit}>
                        <Segment stacked>
                            <Form.Input fluid name="email" icon="mail" value={email} iconPosition="left" placeholder="Email Adress" className={this.handleInputError(errors,'email')} onChange={this.handleChange} type="email"/>
                            <Form.Input fluid name="password" icon="lock" value={password} iconPosition="left" placeholder="Password" className={this.handleInputError(errors,'password')} onChange={this.handleChange} type="password"/>
                            <Button disabled={loading} className={loading?'loading':''} color="violet" fluid size="large">Submit</Button>
                        </Segment>
                    </Form>
                    {errors.length > 0 && (
                        <Message error>
                            <h3>Error</h3>
                            {this.displayErrors(errors)}
                        </Message>
                    )}
                    <Message>
                        Don't have an account?
                        <Link to="/register">
                            Register
                        </Link>
                    </Message>
                </Grid.Column>
            </Grid>
        )
    }
}

export default Login