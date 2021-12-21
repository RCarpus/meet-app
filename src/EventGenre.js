import React, { useEffect, useState } from 'react';
import {
  PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';

const EventGenre = ({ events }) => {

  const getData = () => {
    /**
     * returns an array of objects with keys { name, value }
     * Counts number of events for each genre from passed in events array
     */
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
    const data = genres.map(genre => {
      const numEvents = events.filter(event => {
        return event.summary.includes(genre);
      }).length;
      return { name: genre, value: numEvents };
    });
    // We only want genres that have at least one event for them
    return data.filter(genre => { return genre.value > 0 });
  }
  
  useEffect(() => { setData(() => getData()); }, [events]);
  const [data, setData] = useState([]);

  const colors = ['red', 'orange', 'purple', 'green', 'blue'];

  console.log(getData());

  return (
    <ResponsiveContainer height={300} width="99%">
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          cs={200}
          cy={150}
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, value }) => `${name}: ${(value)}`}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

export default EventGenre;