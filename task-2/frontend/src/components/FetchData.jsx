import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../App.css"

const FetchData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/projects/projectData')
                setData(response.data);
                console.log(response.data);

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div className="text-center text-lg font-semibold">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-600">Error: {error}</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="task-head text-3xl font-bold text-center mb-8 rounded-md px-4 py-2">Fetched Data</h1>

            {data && data.length > 0 ? (
                data.map((project, index) => (
                    <div key={index} className="project-content p-6 mb-8 rounded-md">
                        <h2 className="text-2xl font-semibold mb-4">Project Title: {project.title}</h2>
                        <p className="text-black rounded-md p-4 mb-4 shadow-md shadow-gray-700">{project.description}</p>

                        <h3 className="text-xl font-bold mb-3">Tasks:</h3>
                        {project.tasks && project.tasks.length > 0 ? (
                            project.tasks.map(task => (
                                <div key={task.task_id} className="task mb-6">
                                    <h4 className="text-lg font-medium  text-gray-800 mb-2">{task.task_title}</h4>
                                    <p className=" mb-3"><span className='font-bold'>Task Description: </span>{task.task_description}</p>
                                    <p><span className='font-bold'>Status: </span> {task.status}</p>

                                    <h5 className="text-2xl flex justify-center my-[2rem] pb-[2rem] font-semibold mb-2">Assets</h5>
                                    <ul className="list-disc list-inside flex gap-[3rem] justify-center ">
                                        {task.assets && task.assets.map(asset => (
                                            <li key={asset.asset_id} className="text-black w-[15rem] flex flex-col gap-[1.5rem] items-left rounded-md py-[2rem] px-[1rem] mb-2 gradient-bg">
                                                <h3 className='font-bold text-xl'>  {asset.asset_title}: </h3> 
                                                <p>{asset.asset_description}</p>
                                               
                                                {asset.asset_content && (
                                                    <a
                                                        href={asset.asset_content}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="btn font-bold text-white rounded-md py-2 px-2 text-center "
                                                    >
                                                        View Asset
                                                    </a>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-600">No tasks available.</p>
                        )}
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-700">No data available.</p>
            )}
        </div>
    );
};

export default FetchData;
