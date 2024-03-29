import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">

            <ApprovalCard>
                <h4>Warning!</h4>
                Are you sure you want to do this?
            </ApprovalCard>

            <ApprovalCard >
                <CommentDetail author="Sam" timeAgo="Today at 4:45PM" avatar={faker.image.avatar()} content="Hey there!" />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Today at 2:00AM" avatar={faker.image.avatar()} content="Hey! SAM!"/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="Yesterday at 3:13:PM" avatar={faker.image.avatar()} content="Wazzup peeps!"/>
            </ApprovalCard>

        </div>
    );
}

// Render react components
ReactDOM.render(
    <App />,
    document.querySelector('#root')
    );

