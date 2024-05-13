import React, {useEffect, useState} from "react";
import Card from "./card";
import "./home.css";

function Home(){

    const [data, setData] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        fetch('https://reqres.in/api/users?page=1', {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                    })
                    .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                    })
                    .then(dataa => {
                        let arr = [];
                        for(let key in dataa["data"])
                        {
                            arr.push(dataa["data"][key]);
                        }

                        setData(arr);
                    })
                    .catch(error => {
                    console.error('Fetch error:', error);
                    });
      },[]);

    const handleFetch = (e) =>
    {
        e.preventDefault();
        setIsVisible(true);
    }

    return(
        <div className="parent">

            <button onClick={handleFetch}>Fetch Data</button>
            <br/>
            <br/>
            {isVisible &&
                data.map((data, index) => (
                    <div className="inner" style={{display:"flex", justifyContent:"center", textAlign:"center", padding:"1%"}}>
                        <Card obj={data}/>
                    </div>
                ))
            }

        </div>
    );
}

export default Home;