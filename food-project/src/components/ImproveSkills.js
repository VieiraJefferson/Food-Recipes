import React from "react";

function ImproveSkills() {
    const list =[
        "Learn new recepies",
        "Expderiment with food",
        "Write your own recepies",
        "Know nutrition facts",
        "Get cooking tips",
        "Get ranked"
    ]

  return (
    <div className="section improve-skills">
      <div className="col img">
        <img src="/gallery/img/img_10.jpg"alt=""  
        />
      </div>
      <div className="col typography">
        <h1>Improve Your Culinary Skills</h1>
        {list.map((item,index)=>(
            <p className="skill-item " key={index}>{item} </p>

        ))}
        <button className="btn">signup now</button>
      </div>
    </div>
  );
}

export default ImproveSkills;
