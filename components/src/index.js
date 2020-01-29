import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>ATTENTIONS</h4>
          Are you sure about this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          name="sam"
          date="Today"
          post="fake"
          fakerImg={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          name="joe"
          date="Today"
          post="fake"
          fakerImg={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          name="tits"
          date="Today"
          post="fake"
          fakerImg={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
