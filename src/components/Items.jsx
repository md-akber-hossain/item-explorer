import React, { useState } from "react";
import Events from "./Events";
const Items = ({ items, uuid, projectType }) => {
	const [selectedItem, setSelectedItem] = useState('');
	
	let col = Object.entries(items[0])
	.map(([k, v]) => {
		return (v === null || typeof v !== "object") && k;
	})
	.filter((it) => it === null || it);
	
  let val = items.map((item) =>
	Object.entries(item)
	.map(([k, v]) => {
		return (v === null || typeof v !== "object") && v;
	})
	.filter((it) => it === null || it)
  );
	
	const epcIndex = col.findIndex((c) => c === "epcString");
  
	const handleClick = (row) => {
		setSelectedItem(row[epcIndex]);
  };

  return (
    <>
		<div className="container">
			<div className="item-container">
				<table>
					<thead>
						<tr>
							{col.length && col.map((c, index) => <th key={index}>{c}</th>)}
						</tr>
					</thead>
					<tbody>
						{val.length &&
							val.map((v, index) => {
								return (
									<tr style={ v[epcIndex] === selectedItem ? {background: 'rgb(151, 180, 219)'} : {}} key={index} onClick={() => projectType && handleClick(v)} >
										{v.map((iv, index) => {
											return <td key={index}>{iv ? iv.toString() : "N/A"}</td>;
										})}
									</tr>
								);
							})}
					</tbody>
				</table>
			</div>
			<Events epc={selectedItem} uuid={uuid} />
		</div>
    </>
  );
};

export default Items;
