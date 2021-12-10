import React from "react";
import { Header, Segment, Input, Icon } from "semantic-ui-react";

class MessagesHeader extends React.Component{
    render(){
        const { isPrivateChannel, searchLoading, channelName, numberOfUniqueUsers, handleChange, handleStar, isChannelStarred } = this.props
        
        return(
            <Segment clearing>
                <Header fluid="true" as="h2" floated="left" style={{marginBottom:0}}>
                    <span>
                        {channelName}
                        {!isPrivateChannel && (
                        <Icon 
                        onClick={handleStar} 
                        name={isChannelStarred ? 'star' : 'star outline'} 
                        color={isChannelStarred ? 'yellow' : 'black'}
                        />
                        )}
                    </span>
                    <Header.Subheader>{numberOfUniqueUsers}</Header.Subheader>
                </Header>
                <Header floated="right">
                    <Input
                    loading={searchLoading}
                    onChange={handleChange}
                     size="mini" 
                     icon="search" 
                     name="searchTerm" 
                     placeholder="Search Messages"/>
                </Header>
            </Segment>
        )
    }
}

export default MessagesHeader