/* eslint-disable array-callback-return */
import React from "react";
import "./card-list-style.css";
import { Card } from "../card/card-component";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monster.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};
