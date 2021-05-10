import React from 'react';

const Tabs = (props) => {


    return (
        <div className="tabs">
            <div>
                <button>Tab {props.number}</button>
            </div>
        </div>
    );
};

export default Tabs;