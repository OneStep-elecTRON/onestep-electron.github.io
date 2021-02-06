---
id: linear-regression
title: Linear Regression
sidebar_label: Linear Regression
---
import { Quiz, Question, AnswerPanel } from "../../components/Quiz";

Linear Regression is the most famous machine learning algorithm and its a statistical method to carry out redictive analysis. But before we jump into understanding Linear regression, lets understand what's regression. <br/>

Majority of the machine learning algorithms fall under the supervised learning category. It is the process where an algorithm is used to predict a result based on the previously entered values and the results generated from them. Suppose we have an input variable ‘x’ and an output variable ‘y’ where y is a function of x (y=f{x}). Supervised learning reads the value of entered variable ‘x’ and the resulting variable ‘y’ so that it can use those results to later predict a highly accurate output data of ‘y’ from the entered value of ‘x’. A regression problem is when the resulting variable contains a real or a continuous value. It tries to draw the line of best fit from the data gathered from a number of points.<br/>

Now we know a gist of what's going on in Linear Regression, lets quickly understand its working.
Let’s look at a scenario where linear regression might be useful: losing weight. Let us consider that there’s a connection between how many calories you take in and how much you weigh; regression analysis can help you understand that connection. Regression analysis will provide you with a relation which can be visualized into a graph in order to make predictions about your data. For example, if you’ve been putting on weight over the last few years, it can predict how much you’ll weigh in the next ten years if you continue to consume the same amount of calories and burn them at the same rate.<br/>

The goal of regression analysis is to create a trend line based on the data you have gathered. This then allows you to determine whether other factors apart from the amount of calories consumed affect your weight, such as the number of hours you sleep, work pressure, level of stress, type of exercises you do etc. Before taking into account, we need to look at these factors and attributes and determine whether there is a correlation between them. Linear Regression can then be used to draw a trend line which can then be used to confirm or deny the relationship between attributes. If the test is done over a long time duration, extensive data can be collected and the result can be evaluated more accurately. <br/>

<p align="center">
<img src="https://raw.githubusercontent.com/OneStep-elecTRON/ContentSection/main/Courses/easy_track/Linear%20Regression/Linearreg-1.png" alt="drawing" width="700"/>
</p>

The best fit line is considered to be the line for which the error between the predicted values and the observed values is minimum. It is also called the regression line and the errors are also known as residuals. <br/>

There are some technical terminologies that would be ver necessary to get the in-depth knowledge about the algorithm but for now, we have understood how exactly the algorithm works and we will be taking a look at the other things in the other tracks where we also learn how  to optimize all the algorithms. <br/>


:::tip Implementation Walkthrough

Learn Linear Regression on <a href='https://colab.research.google.com/drive/1FVmV-l4adz4hu4fy7NXPQXc7U_iOvjsf?usp=sharing'>Google Colab.</a>

:::

:::tip Implementation Walkthrough

Learn Polynomial Regression on <a href='https://colab.research.google.com/drive/13zr9sEBkasJVB8fnAuePUosUv-qlU8sy?usp=sharing'>Google Colab.</a>

:::

 <Quiz>
  <Question>Which of the following is true about Residuals ?</Question>
  <AnswerPanel
    answers={["Lower is better", "Higher is better", "A or B depend on the situation", "None of these"]}
    correctIndex={0}
    track="basic"
  />
</Quiz>
