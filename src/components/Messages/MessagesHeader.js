import React from "react";
import { Header, Segment, Input, Icon, Message } from "semantic-ui-react";


class MessagesHeader extends React.Component {
    render() {
        return (
            <Segment clearing>
                <Header fluid="true" as="h2" floated="left" style={{ marginBottom: 0 }}>
                    <span>
                    Channel
                    <Icon name={'star outline'} color="black"/>
                    </span>
                    <Header.Subheader>2 Users</Header.Subheader>
                    </Header>



                    <Header floated="rigth">
                        <Input
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