import React, { Component } from 'react'
import {Link,withRouter} from 'react-router-dom'

 class Landing extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
      }
    render() {
        const loginRegLink=(
            <ul  id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                    <Link to="/login">
                        Login
                    </Link>
                </li>
                <li>
                    <Link to="/register">
                        Register
                    </Link>
                </li>
            </ul>
        )
        const userLink=(
            <ul  id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                    <Link to="/about">
                        User
                    </Link>
                </li>
                <li>
                <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
                </li>
            </ul>
            )
        return(
            <nav className="nav-extended">
                <div className="nav-wrapper">
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        {localStorage.usertoken ? userLink : loginRegLink }
                    </ul>
                   
                </div>
               
            </nav>
            
        )
    }
}

export default withRouter (Landing)
