import React from "react";
import RockPaperScissors from "./examples/rock-paper-scissors/RockPaperScissors";
import BMICalculator from "./examples/bmi-calculator/BMICalculator";
import WorldwideNews from "./examples/news/WorldwideNews";

export const EXAMPLE_LIST = [
  {
    name: "Rock Paper Scissors",
    component: <RockPaperScissors />,
  },
  {
    name: "BMI Calculator",
    component: <BMICalculator />,
  },
 
  {
    name: "Worldwide News",
    component: <WorldwideNews />,
  },
  
];
