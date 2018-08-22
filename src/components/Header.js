import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <div className='flex pa1 justify-between nowrap blue'>
          <div className='flex flex-fixed black'>
            <div className='fw7 mr1'>News Updates</div>
            <Link to='/' className='ml1 no-underline black'> News </Link>
            <div className='ml1'>|</div>
            <Link to='/create' className='ml1 no-underline black'> Submit </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);