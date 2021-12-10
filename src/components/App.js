import React from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import './App.css';
import { connect } from 'react-redux';


import ColorPanel from './ColorPanel/colorpanel';
import SidePanel from './SidePanel/sidepanel';
import Messages from './Messages/messages';
import MetaPanel from './MetaPanel/metapanel';


const App = ({currentUser, currentChannel, isPrivateChannel, userPosts, primaryColor, secondaryColor})=> (
  <Grid columns="equal" className="app" style={{background: secondaryColor}}>
    <ColorPanel  key={currentUser && currentUser.name} currentUser={currentUser}/>
    <SidePanel 
    key={currentUser && currentUser.uid}
    currentUser={currentUser}
    primaryColor={primaryColor}
    />
    <GridColumn style={{marginLeft:320}}>
      <Messages 
      key={currentChannel && currentChannel.name}
      currentChannel={currentChannel}
      currentUser={currentUser}
      isPrivateChannel={isPrivateChannel}
      />
      </GridColumn>
    <GridColumn width={4}>
    <MetaPanel key={currentChannel&&currentChannel.id} isPrivateChannel={isPrivateChannel}
    currentChannel={currentChannel} userPosts={userPosts}/>
    </GridColumn>

  </Grid>
  );

  const mapStateToProps = state =>({
    currentUser: state.user.currentUser, 
    currentChannel : state.channel.currentChannel,
    isPrivateChannel: state.channel.isPrivateChannel,
    userPosts: state.channel.userPosts,
    primaryColor: state.colors.primaryColor,
    secondaryColor: state.colors.secondaryColor
  })

export default connect(mapStateToProps)(App);
