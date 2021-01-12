import React from "react";

const ItemsHome = (props) => {
    let test = []
    let i = 0;
    props.data.map(item => {
        test.push(<p key={i}> {i + '. ' + item.title} </p>)
        i++;
    })
    console.log(test)
    return(
        <div className="item">
            <div className="contFeedback">
                <p>0</p>
                <p>votes</p>
            </div>
            <div className="contFeedback">
                <p>0</p>
                <p>answers</p>
            </div>
            <div className="contFeedback">
                <p>0</p>
                <p>views</p>
            </div>
            <div className="linkQuestions">
                <div className="tags">
                    <p></p>
                </div>
                <div>
                    { test }
                </div>

            </div>
        </div>
    )
}


export default ItemsHome;
