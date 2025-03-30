import React from 'react';
import leetcode from "./leetcode.png";
function Problems(props) {
  return (
    <>
   <h1>{props.company}</h1>
   <table>
       <thead>
            <tr>
                <th>SL.No.</th>
                <th>Title</th>
                <th>Difficulty</th>
                <th>Topics</th>
                <th>Link</th>
            </tr>
        </thead>
        <tbody>
            {props.data.map((problem,index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{problem.Title}</td>
                    <td>{problem.Difficulty}</td>
                    <td>{problem.Topics}</td>
                    <td><a href={problem.Link} target="_blank" rel="noopener noreferrer"><img src={leetcode} alt="link" /></a></td>
                </tr>
            ))}
        </tbody>
    </table>
    </>
  );
}

export default Problems;
