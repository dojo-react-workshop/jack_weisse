import React from 'react';

const Results = (props)=>{
    return (
      	<div>
      		<table>
      			<thead>
      				<tr>
      					<td>Max</td>
      					<td>Min</td>
      					<td>Mean</td>
      					<td>Mode</td>
      				</tr>
      			</thead>
      			<tbody>
      				<tr>
      					<td>{props.values.max}</td>
      					<td>{props.values.min}</td>
      					<td>{props.values.mean}</td>
      					<td>{props.values.mode}</td>
      				</tr>
      			</tbody>
      		</table>
      	</div>
    );
 }

export default Results;