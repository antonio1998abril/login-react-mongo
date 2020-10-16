import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { register } from '../../actions/userAction';




class Register extends Component {
    constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      name:'',
      errors: {}
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
}
onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const newUser = {
        name:this.state.name,
        email: this.state.email,
        password: this.state.password
    }

    register(newUser).then(res => {
        this.props.history.push(`/login`)
    })
  }

    render() {
        return ( <div className="container center-color">
            <div className="form">
                <div className="row">
                    <form noValidate onSubmit={this.onSubmit} >
                        <div className="col s6 m12" >
                            <ul className=" form-container">
                                <li>
                                    <h1 className="center-align">REGISTER</h1>
                                </li>

                               

                                <li>
                                <label htmlFor="name">NAME</label>
                                <input type="text" name="name" id="name" className="validate" 
                                    value={this.state.name}
                                    onChange={this.onChange}
                                ></input>
                            </li>
                            <li>
                                <label htmlFor="email">EMAIL</label>
                                <input type="email" name="email" id="email" className="validate" 
                                    value={this.state.email}
                                    onChange={this.onChange}
                                ></input>
                            </li>
                            <li>
                                <label htmlFor="password">PASSWORD</label>
                                <input type="password" id="password" name="password" 
                                    value={this.state.password}
                                    onChange={this.onChange}
                                ></input>
                            </li>
                            <li>
                                <button type="submit" className="action-btn waves-effect waves-light btn-large red"
                                name="action"
                                >Register a new account</button>      
                            </li>
                                <br></br>
                            </ul>       
                        </div>     
                                <Link to="/login" className="btn-small primary">
                                You have a account?</Link>       
                    </form>
                </div>
             </div>
        </div> 
        
        )
    }  
}


export default Register



