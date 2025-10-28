import React, { useEffect, useState } from "react";
import Node from "./Node/Node";
import "./PathFindingVisualizer.css";

const ROWS = 20;
const COLS = 50;
function buildGrid(){
    const nodes=[];
    for(let i=0;i<ROWS;i++){
        let currRow=[];
        for(let j=0;j<COLS;j++){
            currRow.push({i,j});
        }
        nodes.push(currRow);
    }
    return nodes;
}

export default function PathFindingVisualizer() {

const [nodes,setNodes]=useState([]);

useEffect(()=>{
    setNodes(buildGrid());
},[]);

  return (
    <div className="grid">
        {nodes.map((row,rowIdx)=>(
            <div className="grid-row" key={rowIdx}>
                {row.map((col,colIdx)=>(
                    <Node key={`${rowIdx}-${colIdx}`}/>
                    
                ))}
            </div>
        ))}
    </div>
  );
}
