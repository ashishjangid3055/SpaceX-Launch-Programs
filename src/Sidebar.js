import React from 'react';
import { Link } from 'react-router-dom';


function Sidebar() {

	return (
		<aside>
	      <h3>Filters</h3>
	      <p>Launch Year</p>
			<div className='year_list'>
				<ul>
					<li>
						<Link to='/2006'>2006</Link>
					</li>
					<li>
						<Link to='/2007'>2007</Link>
					</li>
					<li>
						<Link to='/2008'>2008</Link>
					</li>
					<li>
						<Link to='/2009'>2009</Link>
					</li>
					<li>
						<Link to='/2010'>2010</Link>
					</li>

					<li>
						<Link to='/2011'>2011</Link>
					</li>
					<li>
						<Link to='/2012'>2012</Link>
					</li>
					<li>
						<Link to='/2013'>2013</Link>
					</li>
					<li>
						<Link to='/2014'>2014</Link>
					</li>
					<li>
						<Link to='/2015'>2015</Link>
					</li>

					<li>
						<Link to='/2016'>2016</Link>
					</li>
					<li>
						<Link to='/2017'>2017</Link>
					</li>
					<li>
						<Link to='/2018'>2018</Link>
					</li>
					<li>
						<Link to='/2019'>2019</Link>
					</li>
					<li>
						<Link to='/2020'>2020</Link>
					</li>
				</ul>
			</div>
			<div className='success_launch'>
				<h4>Successful Launch</h4>
				<ul>
					<li>
						<Link to='?launch_success=true'>True</Link>
					</li>
					<li>
						<Link to='?launch_success=false'>False</Link>
					</li>
				</ul>
			</div>
    	</aside>
	)
}

export default Sidebar