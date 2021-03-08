import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';
import CreateIcon from '@material-ui/icons/Create';
import StarIcon from '@material-ui/icons/Star';
import CancelIcon from '@material-ui/icons/Cancel';
import BlockIcon from '@material-ui/icons/Block';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';


class DropDown extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenuState: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
  }
  myClickOutsideHandler = (evt) => this.setState({showMenuState: false})
    showMenu = e =>{
      e.preventDefault();
      this.setState({showMenuState: true});
  }
  // changeComponent = e =>{
  //   this.setState({renderArea: e.target.value});
  //   console.log(this.state.renderArea)
  // }
  render() {
    return (
      <div>
        <div id='menuIconDiv'>
              <IconButton id='menuIconContainer' onClick={this.showMenu}>
                  <MoreVertIcon id='menuVertIcon'></MoreVertIcon>
              </IconButton>
        </div>
        {
          this.state.showMenuState
            ? (
              <div className="menuVert">
                <div><CreateIcon id='createIcon' /><button onClick={this.props.name} value='reco'>Write Recommendation</button></div>
                <div><StarIcon id='createIcon' /><button onClick={this.props.name} value='rate'>Rate</button></div>
                <div><CancelIcon id='createIcon' /><button onClick={this.props.otherName}>Remove Connection</button></div>
                <div><BlockIcon id='createIcon' /><button onClick={this.props.otherName}>Block Connection</button></div>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}
const clickOutsideConfig = {
  handleClickOutside: function(instance) {
    return instance.myClickOutsideHandler;
  }
};
export default onClickOutside(DropDown, clickOutsideConfig);