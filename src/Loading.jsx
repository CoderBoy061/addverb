import { Spin } from "antd";
import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#ececec",
      }}
    >
      <Spin tip="Loading...."></Spin>
    </div>
  );
};

export default Loading;
