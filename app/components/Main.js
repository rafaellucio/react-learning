import React from 'react';
import SearchGithub from './SearchGithub';

var Main = React.createClass({
    render: function() {
        return (
        	<div className="main-container">
	        	<nav className="navbar navbar-default" rola="navigation">
	        		<div className="col-sm-7 col-sm-offset-3" style={{marginTop: 15}}>
						<SearchGithub />
	        		</div>
	        	</nav>
	        	<div className="container">
	        		{this.props.children}
	        	</div>
	        </div>
    	)
    }
});

module.exports = Main;