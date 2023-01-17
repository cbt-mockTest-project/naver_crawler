import React from "react";
import { NextPage } from "next";
import axios from "axios";
import { Button, Input } from "antd";
import useInput from "@lib/hooks/useInput";

interface testProps {}

const Test: NextPage<testProps> = () => {
  const { value: blogUrl, onChange: onChangeBlogUrl } = useInput("");
  const testFunc = async () => {
    const a = await axios.post("/api/macro", { blogUrl });
    console.log(a.data);
  };

  return (
    <div>
      <Input value={blogUrl} onChange={onChangeBlogUrl} />
      <Button onClick={() => testFunc()}>버튼</Button>
    </div>
  );
};

export default Test;
