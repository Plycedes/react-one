import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch("https://api.github.com/users/plycedes")
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data);
    //             setData(data);
    //         });
    // }, []);

    const data = useLoaderData();
    return (
        <div className="flex text-left m-4 text-2xl">
            <div className="w-1/2 pl-20">
                <img src={data.avatar_url} className="rounded-lg w-50 h-50" />
            </div>
            <div className="w-1/2">
                <ul className="list-none">
                    <li>Username: {data.login}</li>
                    <li>Name: {data.name}</li>
                    <li>Followers: {data.followers}</li>
                    <li>Following: {data.following}</li>
                    <li>Repositories: {data.public_repos}</li>
                </ul>
            </div>
        </div>
    );
}

export default Github;
