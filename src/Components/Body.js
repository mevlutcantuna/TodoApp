import React from "react";
import "../Styles/Body.css";
import { connect } from "react-redux";

function Body(props) {
  const { todo , removeItem} = props;
  return (
    <div className={"body"}>
      {todo.map((each) => (
        <li className={'list'} key={each.id}>
          {each.inputValue}
          <button className={'remove__button'} onClick={() => removeItem(each.id)}>X</button>
        </li>
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    todo: state.body,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    removeItem: (id) => {
      dispatch({
        type: "REMOVE_ITEM",
        id: id,
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);
