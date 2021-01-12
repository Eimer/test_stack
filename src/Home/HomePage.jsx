import React from "react";
import ItemsHome from "./ItemsHome";
// import * as axios from 'axios';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: undefined,
        };
    }
    componentDidMount() {
        fetch(
            `https://api.stackexchange.com/2.2/questions?order=asc&sort=activity&site=stackoverflow`
        )
            .then((resp) => resp.json())
            .then((result) => {
                this.setState({
                    data: result,
                });

            });
    }
    render() {
        if (this.state.data) {
            return (
                <article id="mainArticle">
                    <div className="filterQuestions">
                        <p id="title">Top Questions</p>
                        <button id="btnAskQues">Ask Questions</button>
                        <p className="allShowQuestions">
                            <span id="countQue">2000</span> questions
                        </p>
                        <div className="btn-tags">
                            <button>Activity</button>
                            <button>Votes</button>
                            <button>Creation</button>
                        </div>
                    </div>
                    <div className="allQuestions">
                        <ItemsHome data={this.state.data.items}/>

                    </div>
                </article>
            );
        }else {
            return <div></div>
        }
    }
}
// const Home = (props) => {
//   console.log(x)
//   return (
//     <article id="mainArticle">
//         <div className="filterQuestions">
//           <p id="title">Top Questions</p>
//           <button id="btnAskQues">Ask Questions</button>
//           <p className="allShowQuestions">
//             <span id="countQue">2000</span> questions
//           </p>
//           <div className="btn-tags">
//             <button>Activity</button>
//             <button>Votes</button>
//             <button>Creation</button>
//           </div>
//         </div>
//         <div className="allQuestions">
//         <div className="item">
//           <div className="contFeedback">
//             <p>0</p>
//             <p>votes</p>
//           </div>
//           <div className="contFeedback">
//             <p>0</p>
//             <p>answers</p>
//           </div>
//           <div className="contFeedback">
//             <p>0</p>
//             <p>views</p>
//           </div>
//           <div className="linkQuestions">

//           {/* <p>{x}</p> */}
//           </div>
//           <div className="tags">
//           <p></p>
//           </div>
//           </div>
//         </div>
//       </article>
//     )
//     }

export default Home;
