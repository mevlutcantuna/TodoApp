import React from "react";
import "../Styles/Input.css";
import { connect } from "react-redux";

function Input(props) {
  const { handleChange, input, addItem } = props;
  return (
    <div className={"input"}>
      <input
        className={'input__value'}
        type={"text"}
        value={input}
        onChange={(e) => handleChange(e.target)}
      />
      <button className={"button"} onClick={() => addItem(input)}>
        Add
      </button>
    </div>
  );
}

function mapStateToProps(store) {
  return {
    input: store.input,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleChange: (target) =>
      dispatch({
        type: "HANDLE_CHANGE",
        value: target.value,
      }),

    addItem: (input) => {
      let obj = {};
      let inputValue = input;
      let id = Math.floor(Math.random() * 1000);
      obj = { inputValue, id };

      dispatch({
        type: "ADD_ITEM",
        value: obj,
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);
