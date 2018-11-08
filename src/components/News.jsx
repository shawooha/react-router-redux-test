import React, { Component } from 'react';

const newsData = [
	{
		title: "Header 1",
		text: "Text 1",
	},
	{
		title: "Header 2",
		text: "Text 2",
	},
	{
		title: "Header 3",
		text: "Text 3",
	},
];

class News extends Component {
  	render() {
	    return (
	      <div className="content">
	      <h1>News</h1>
	      {newsData.map(function(o,index) {
	      	return (
				<div key={index}>
					<h2>{o.title}</h2>
					<p>{o.text}</p>
					<hr />
				</div>	      		
	      	);
	      })}
	      </div>
	    );
	}
}

export default News;