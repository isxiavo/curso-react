import React from "react";
import DiretaFilho from "./DiretaFilho";

export default (props) => {
  return (
    <div>
      <DiretaFilho texto="Junior" numero={20} nerd={false}></DiretaFilho>
      <DiretaFilho texto="Gabriel" numero={17} nerd={true}></DiretaFilho>
    </div>
  );
};