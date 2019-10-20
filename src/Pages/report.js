import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import ReactTable from 'react-table'
import '../App.css';
import 'react-table/react-table.css'


//this is the base data that allows us to have our table have one thing in it





//this creates a const called data, and an accessor function called getData in the same line
 
 
  
/*const columns = 
  [
	  {
	  
		Header: 'Name',
		accessor: 'name', // String-based value accessors!
		Cell: props =>  <div style={{'text-align': 'center'}}>
							<span className='name'>{data[0].name}</span>
						</div>
	  }, 
	  {
		Header: 'Age',
		accessor: 'age',
		Cell: props => <div style={{'text-align': 'center'}}>
							<span className='age'>{props.value}</span>
						</div> 

	  }
	 , 
	{
		 id: 'friendName', // Required because our accessor is not a string
		 Header: 'Friend Name',
		 accessor: d => d.friend.name, // Custom value accessors!
		 Cell: props => <div style={{'text-align': 'center'}}>
							<span className='friendName'>{props.value}</span>
						</div>
	 }
	  , 
	 {
		  Header: props => <span>Friend Age</span>, // Custom header components!
		  accessor: 'friend.age',
		  Cell: props => <div style={{'text-align': 'center'}}>
							<span className='age'>{props.value}</span>
						</div>
	 }
]*/

function Report() 
{
	const [currData, setCurrData] = useState([]);
	
	/*const data = [{ name: 'Adam',
				age: 23,
				friend: {name: 'Jeremy',age: 23,}
	}]*/
	//this is the line hurting us. 
	useEffect(()=> {fetch('localhost:5000').then(response => response.json()).then(data => setCurrData( data ))}   );
	

  	return (<div className="Report">
		  {/*<ReactTable data={data}columns={columns}/>*/}
		  </div>);
}

export default Report;