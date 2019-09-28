import React from 'react';

/* Must reference props.children somewhere to get any children to show */
const ApprovalCard = props => {
    console.log(props);
    return (
        <div className={"ui card"}>
            <div className={"content"}>{props.children}</div>
            <div className={"extra content"}>
                <div className={"ui two buttons"}>
                    <div className={"ui basic green button"}>Approve</div>
                    <div className={"ui basic red button"}>Reject</div>
                </div>
            </div>
        </div>
    );
}

export default ApprovalCard;