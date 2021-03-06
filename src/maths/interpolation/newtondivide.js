import { React, useState } from "react";
import { Input, Table, Button } from "antd";
import { Card, Col, Row } from "antd";
const axios = require("axios");
let api;
const initialState = {
  Numberofpoint: 0,
  xtrue: 0,
  interpolatepoint: 0,
};
var columns = [
  {
    title: "No.",
    dataIndex: "no",
    key: "no",
  },
  {
    title: "X",
    dataIndex: "x",
    key: "x",
  },
  {
    title: "Y",
    dataIndex: "y",
    key: "y",
  },
];
// var columnsC = [
//   {
//     title: "C auther",
//     dataIndex: "c",
//     key: "c",
//   },
//   {
//     title: "value",
//     dataIndex: "value",
//     key: "value",
//   },
// ];
let x = [],
  y = [],
  tableTag = [],
  tempTag = [],
  valueX = [],
  valueY = [],
  datac = [],
  fx;
export default function Newtondivide() {
  const [variable, setVariable] = useState(initialState);
  const [showtable, setshowtable] = useState(false);
  const [showans, setshowans] = useState(false);
  const [showC, setshowC] = useState(false);
  const handlechange = (e) => {
    setVariable({ ...variable, [e.target.name]: e.target.value });
  };
  const clearState = () => {
    setshowC(false);
    setshowans(false);
    setshowtable(false);
    setVariable({ ...initialState });
    x = [];
    y = [];
    tableTag = [];//
    tempTag = [];//
    valueX = [];
    valueY = [];
    datac = [];
    fx = undefined;
  };
  function createTable(n) {
    for (var i = 1; i <= n; i++) {
      x.push(
        <Input
          style={{
            width: "20%",
            height: "50%",
            marginInlineEnd: "5%",
            marginBlockEnd: "5%",
            //fontSize: "12px",
            //fontWeight: "bold",
          }}
          id={"x" + i}
          key={"x" + i}
          placeholder={"x" + i}
        />
      );
      y.push(
        <Input
          style={{
            width: "20%",
            height: "50%",
            marginInlineEnd: "5%",
            marginBlockEnd: "5%",
            // fontSize: "12px",
            // fontWeight: "bold",
          }}
          id={"y" + i}
          key={"y" + i}
          placeholder={"y" + i}
        />
      );
      tableTag.push({
        no: i,
        x: x[i - 1],
        y: y[i - 1],
      });
    }
    setshowtable(true);
  }
  function createInterpolatePointInput(n) {//
    for (var i = 1; i <= n; i++) {
      tempTag.push(
        <Input
          style={{
            width: "20%",
            height: "50%",
            marginInlineEnd: "5%",
            marginBlockEnd: "5%",
            // fontSize: "12px",
            // fontWeight: "bold",
          }}
          id={"p" + i}
          key={"p" + i}
          placeholder={"p" + i}
        />
      );
    }
  }
  function inputvalue() {
    for (let i = 1; i <= variable.Numberofpoint; i++) {
      valueX[i - 1] = parseFloat(document.getElementById("x" + i).value);
      valueY[i - 1] = parseFloat(document.getElementById("y" + i).value);
    }
  }
  function C(st, ed) {
    if (ed - st === 1) {
      let output = (valueY[ed] - valueY[st]) / (valueX[ed] - valueX[st]);
      return output;
    } else {
      let left = C(st + 1, ed);
      let right = C(st, ed - 1);
      let output = (left - right) / (valueX[ed] - valueX[st]);
      return output;
    }
  }
  function find(xfind) {
    let sum = valueY[0];
    datac[0] = {
      key: 0,
      c: 0,
      value: valueY[0],
    };
    for (let i = 1; i < valueX.length; i++) {
      let temp2 = C(0, i);
      datac[i] = {
        key: i,
        c: i,
        value: temp2.toFixed(25),
      };
      for (let j = 0; j < i; j++) {
        let temp = xfind - valueX[j];
        temp2 *= temp;
      }
      sum += temp2;
    }
    return sum;
  }
  function Newton(xfind) {
    inputvalue();
    fx = find(xfind);
    setshowans(true);
    setshowC(true);
  }
  async function example() {
    await axios({
      method: "get",
      url: "http://localhost:5600/data/newtondivide",
    }).then((response) => {
      console.log("response: ", response.data);
      api = response.data;
    });
    setVariable({
      Numberofpoint: api.numberpoint,
      xtrue: api.xfind,
      interpolatepoint: api.interpolateinput,
    });
    x = [];
    y = [];
    tableTag = [];
    tempTag = [];
    //await createInterpolatePointInput(api.interpolateinput);
    await createTable(api.numberpoint);
    for (let i = 1; i <= api.numberpoint; i++) {
      document.getElementById("x" + i).value = api.arrayX[i - 1];
      document.getElementById("y" + i).value = api.arrayY[i - 1];
    }
  }

  return (
    <div>
       <Card title={"Newton-Divide Interpolation"}
             style={{ width: 700, background: "#e0ecff", color: "#cbd4d2",padding: 20,textAlign: 'center'}}>
                 <p style={{ fontSize: "16px",color:"black" }}>Number of points</p>
              <Input
                placeholder="number"
                name="Numberofpoint"
                value={variable.Numberofpoint}
                style={{ width: "30%" ,height:"20%",}}
                onChange={handlechange}
              />
              <p style={{ marginTop: "2vh",fontSize: "16px",color:"black" }}>x to find</p>
              <Input
                placeholder="f(x)"
                name="xtrue"
                value={variable.xtrue}
                style={{ width: "30%" ,height:"20%", }}
                onChange={handlechange}
              />
               <div >
                <Button
                  type="submit" shape="round" 
                  style={{ marginTop: "6vh",color:'#140101',background:'#d82bff'}} 
                  onClick={() => {
                    createTable(parseFloat(variable.Numberofpoint));
                    createInterpolatePointInput(variable.interpolatepoint);
                  }}
                >
                  Submit 
                </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button
          type="submit" shape="round" 
          style={{ marginTop: "6vh",color:'#140101',background:'#d82bff'}} 
          onClick={() => example()}
        >
         API
        </Button>
        </div>
        {/* <Button
          type="primary"
          style={{ marginLeft: "5px" }}
          onClick={() => example()}
        >
          Example
        </Button> */}
      </Card>
      <div>
      
{/*            
              {showans && (
                <Card>
                  <p style={{ fontSize: "20px" }}>Answer</p>
                  <p style={{ fontSize: "20px" }}>{fx}</p>
                </Card>
              )}
             */}
         
         
         <Card title={"Please input data"}
             style={{ width: 700, background: "#e0ecff", color: "#cbd4d2",padding: 20,textAlign: 'left'}}>>

              {showtable && (
                <Card>
                  <Table
                    columns={columns}
                    dataSource={tableTag}
                    // pagination={false}
                  />
                 <br />
                  <Button
                  type="submit" shape="round" 
                  style={{ color:'#140101',background:'#ffec3d'}} 
                    onClick={() => {
                      Newton(parseFloat(variable.xtrue));
                    }}
                  >
                    Calculate
                  </Button>
                  {showans && (
                <Card>
                  <p style={{ fontSize: "20px"}}>Answer : {fx}</p>
                 
                </Card>
              )}
                </Card>
              )}
              
            </Card>
      
       
      </div>
    </div>
  );
}

