import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

const EventGenre = ({ events }) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const getData = () => {
			const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
			const data = genres.map(genre => {
				const value = events.filter(event =>
					event.summary.split(' ').includes(genre)
				).length;
				return { name: genre, value };
			});
			return data;
		};
		setData(() => getData());
	}, [events]);

	const colors = [ '#2DBBD9', '#F2DE25', '#37B928', '#24618C', '#E62913'  ];

	return (
		<ResponsiveContainer height={400}>
			<PieChart width={400} height={400}>
				<Pie
					data={data}
					cx='50%'
					cy='50%'
					labelLine={false}
					outerRadius={150}
					fill='#8884d8'
					dataKey='value'
					label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
				>
					{data.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
					))}
				</Pie>
				<Legend
					layout='horizontal'
					verticalAlign='top'
					align='center'
					height={45}
				/>
			</PieChart>
		</ResponsiveContainer>
	);
}

export default EventGenre