import { useState, useEffect } from "react";
import LineChart from "../components/LineChart";
import axios from "axios";
import Content from "../Content";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
export default function Statistics() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    borderRadius: "20px",
    color: theme.palette.text.secondary,
  }));
  const [QuizmasterData, setQuizmasterData] = useState([]);

  const config = {
    headers: {
      "Content-type": "Application/json",
    },
  };

  const findNbQuizMasters = async () => {
    try {
      console.log("hello");
      const result = await axios.get(
        "http://localhost:5000/admin/usersEachMonth",
        config
      );

      setQuizmasterData(result.data);

      // console.log(Quizmasters);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("#QuizmasterData", QuizmasterData);
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
    ],
    datasets: [
      {
        label: "NombreOfQuizMasters",
        data: QuizmasterData.map((data) => data.total),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    type: "line",
    data: data,
    options: {
      animations: {
        tension: {
          duration: 1000,
          easing: "linear",
          from: 1,
          to: 0,
          loop: true,
        },
      },
      scales: {
        y: {
          // defining min and max so hiding the dataset does not change scale range
          min: 0,
          max: 100,
        },
      },
    },
  };
  function show() {
    return <LineChart chartData={data} config={options} />
    
  }

  useEffect(
    () => {
      findNbQuizMasters();
    },
    [],
    [QuizmasterData]
  );

  return (
    <div className="outletForm">
      <Content>
        <Grid container spacing={2} columns={16}>
          <Grid
            item
            xs={4}
            style={{
              textAlign: "center",
              justifyContent: "center",
              marginTop: "80px",
            }}
          >
            <Item  style={{ border: "4px solid  #FFD600" }}>
              <p style={{ textAlign: "center" }}>Nombre of QuizMasters</p>
            </Item>
            <br></br>
            <Item style={{ border: "4px solid  #560A02" }}>
              <p style={{ textAlign: "center" }}>Nombre of Candidates</p>
            </Item>
            <br></br>
            <Item style={{ border: "4px solid  #318413" }}>
              <p style={{ textAlign: "center" }}>Nombre of Quizzes</p>
            </Item>
            <br></br>
          </Grid>
          <Grid item xs={12}>
            {/*<Item>
              <LineChart chartData={data} config={options} />
          </Item>*/}
          </Grid>
        </Grid>
      </Content>
    </div>
  );
}
