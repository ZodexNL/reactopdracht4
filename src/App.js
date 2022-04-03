import React, { useState, useEffect } from "react";

import "./App.css";

const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    const [item] = data.results;
    setData(item);
    setLoading(false);
  }, []);

  return { data, loading };
};

export default () => {

  const { data, loading } = useFetch("https://api.randomuser.me/");

  return (

     

    <div>
       <h1>Ik maak gebruik van de Random User API</h1>
      <table>
        <tr>
          <th>Naam:</th>
          <th>Gender:</th>
          <th>Email:</th>
          <th>Adres:</th>
          <th>Timezone:</th>
          <th>Geboortedatum:</th>
          <th>Telefoon:</th>
        </tr>
        <tr>
          <td>{loading ? <div>...loading</div> : <div>{data.name.title} {data.name.first} {data.name.last}</div>}</td>
          <td>{loading ? <div>...loading</div> : <div>{data.gender}</div>}</td>
          <td>{loading ? <div>...loading</div> : <div>{data.email}</div>}</td>
          <td>{loading ? <div>...loading</div> : <div>{data.location.street.number} {data.location.street.name}, {data.location.city}, {data.location.country}</div>}</td>
          <td>{loading ? <div>...loading</div> : <div>{data.location.timezone.description}, {data.location.timezone.offset}</div>}</td>
          <td>{loading ? <div>...loading</div> : <div>{data.dob.date}, {data.dob.age}</div>}</td>
          <td>{loading ? <div>...loading</div> : <div>{data.phone}</div>}</td>
        </tr>
      </table>
    </div>

  );
};


