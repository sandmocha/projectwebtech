import React from 'react';  
import './Home.css';
import Header from '../Header/Header';
import Content from '../Content/Content';

import { Button, Modal ,Menu,Icon,Sidebar} from 'semantic-ui-react'



class Home extends React.Component { 
  

  render() {
    return (
      <div> 
  < Header/>
  < Content/>
  

        <a href ="/Login"><button class="ui button" role="button">Login</button></a>
       <a href ="/Profile"><button class="ui button" role="button">Profile</button></a>
      <br></br>
      <i class="huge icons">
      <i aria-hidden="true" class="book icon"></i>
      <i aria-hidden="true" class="book icon"></i></i>

      <i class="huge icons">
<i aria-hidden="true" class="computer icon"></i>
<i aria-hidden="true" class="computer icon"></i></i>

<i class="huge icons">
<i aria-hidden="true" class="camera icon"></i>
<i aria-hidden="true" class="camera icon"></i></i>

<br></br>
      <i class="huge icons">
      <i aria-hidden="true" class="thin circle big icon"></i>
      <i aria-hidden="true" class="user icon"></i></i>

      <i class="huge icons">
<i aria-hidden="true" class="thin circle big icon"></i>
<i aria-hidden="true" class="user icon"></i></i>

<i class="huge icons">
<i aria-hidden="true" class="thin circle big icon"></i>
<i aria-hidden="true" class="user icon"></i></i>


      </div>
      

    );
  }
}

export default Home;
