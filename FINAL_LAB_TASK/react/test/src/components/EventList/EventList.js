import React, { useEffect, useState } from 'react';
import fakeData from '../../FakeData/data.json'

const EventList = () => {
    const [infos, setInfos] = useState([]);
    useEffect(()=>{
        setInfos(fakeData);
    },[])
// console.log(infos);



    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                
                <tbody>
                    {
                        infos.map(info=>
                        <tr>
                            <td>{info.id}</td>
                            <td>{info.event}</td>
                            <td>{info.description}</td>
                            {/* <td>edit </td> */}
                        </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    );
};

export default EventList;