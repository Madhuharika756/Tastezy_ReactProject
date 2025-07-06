const root = ReactDOM.createRoot(document.getElementById("root"));
const parent = React.createElement("div",{id:"parent"},
                    React.createElement("div",{id:"child"},[
                        React.createElement("h1",{id:"sibling1"},"Sibiling-1"),
                        React.createElement("h1",{id:"sibling2"},"Sibling2"),
                    ]));

const parent1 = React.createElement("div",{id:"parent"},
    [
        React.createElement("div",{id:"child1"},
            [
                React.createElement("h1",{},"h1 Tag"),
                React.createElement("h2",{},"h2 Tag"),
            ]
        ),
        React.createElement("div",{id:"child2"},
            [
                React.createElement("h1",{},"h1 tag"),
                React.createElement("h2",{},"h2 tag"),
            ]
        )
    ]

)
root.render(parent1);