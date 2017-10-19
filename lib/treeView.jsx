import React, { propTypes } from 'react';

export default class Tree extends React.Component {
    constructor(props) {
        super(props);
    }

    state = { collapse: this.props.collapse };

    onClick = () => {

        this.setState({ collapse: !this.state.collapse });
    };

    createTreeView = (dataChildren, state) => {
        let childNodes;
        childNodes = dataChildren.map(function(node, index) {

            let length = node.children ? node.children.length : "-1";

            if ((!node.children) || (length === 0)) {
                return <li key={index}><span className='data'>{node.label}</span></li>
            }
            return <li key={index}><Tree data={node} collapse={state}/></li>

        });

        return childNodes;
    };

    expandCollapse = () => {
        let classObj
        let showData = this.state.collapse ? ' showData' : '';
        let hideData = !this.state.collapse ? ' hideData' : '';

        classObj = 'data' + showData + hideData;
        return classObj
    };

    render() {

        let childNodes
        let classObj

        if (this.props.data.children !== null) {
            childNodes = this.createTreeView(this.props.data.children, this.state.collapse);
            classObj = this.expandCollapse();
        }


        return (
            <ul className={classObj}>
								    <span onClick={this.onClick} >
							    			{this.props.data.label}
							   		 </span>
							    {childNodes}
						    </ul>

        );
    }
}
