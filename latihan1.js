const anchestor = [
    {
        name: "Sukandar",
        child:[
            {
                name: "Wayan Tjinta",
                child:[
                    {
                        name:"Mbok Adek",
                    },{
                    name: "Kakmang"
                    },{
                        name: "Mbak Tanjung",
                        child:[
                            {
                                name:"Arjuna",
                            },
                        ],
                    },
                    {
                        name:"Yerin",
                    },
                ],
            },
            {
                name: "Sumiya",
                child:[
                    {
                        name : " Lolita",
                        child:[
                            {
                                name: "wira",
                            }
                    ],
                    },
                    {
                        name:"Novita",
                    },{
                        name:"Sugas ucul",
                    },
                ],
            },
            
        ],
    },
    
];

console.log(anchestor);

function renderAnchestor (node,depth=0) {
    let inheritance = "",
    space="";
    
    for(let i=0; i< depth; i++){
        inheritance += "-";
        space+=" ";
    }
    node.forEach(function(item){
        // console.log(item.child);
            console.log(
                `${depth>0?space+"|"+ inheritance+"":""} ${item.name}`
            );

            if(item.child) renderAnchestor(item.child,(depth+=1));

    });

  }

  renderAnchestor(anchestor,0);