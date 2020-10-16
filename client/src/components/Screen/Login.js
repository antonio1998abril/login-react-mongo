import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { login } from '../../actions/userAction';




class Login extends Component {
    constructor() {
    super()
    this.state = {
      email: '',
      password: '',
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

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    login(user).then(res => {
      if (res) {
        this.props.history.push(`/about`)
      }
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
                                    <h1 className="center-align">LOGIN</h1>
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
                               
                                >Sign in</button>
                                
                            </li>
                        

                            <label>
                            NEW USER?           
                            </label>
                            <li>
                                <Link to="/register" className="btn-small green">
                                CREATE A NEW ACCOUNT</Link>
                            </li>

                            </ul>
                        </div>
                    </form>
                </div>
             </div>
        </div> 
        
        )
    }  
}


export default Login



