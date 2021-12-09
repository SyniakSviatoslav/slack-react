import React from "react";
import { Header, Segment, Input, Icon, Message } from "semantic-ui-react";


class MessagesHeader extends React.Component {
    render() {
        const {channelName, numUniqueUsers, handleSearchChange, searchLoading, 
            isPrivateChannel, handleStar, isChannelStarred} = this.props;

        return (
            <Segment clearing>
                <Header fluid="true" as="h2" floated="left" style={{ marginBottom: 0 }}>
                    <span>
                    {channelName}
                    {!isPrivateChannel && (
                    <Icon onClick={handleStar} 
                    name={isChannelStarred ? "star" : "star outline"} 
                    color={isChannelStarred ? "yellow" : "black"}
                    />
                    )}
                    </span>
                    <Header.Subheader>{numUniqueUsers}</Header.Subheader>
                    </Header>



                    <Header floated="rigth">
                        <Input
                        loading={searchLoading}
                        onChange={handleSearchChange}
                        size="mini"
                        icon="search"
                        name="searchTerm"
                        placeholder="SearchMessages"
                        />
                    </Header>
            </Segment >
        )
    }
}

export default MessagesHeader;