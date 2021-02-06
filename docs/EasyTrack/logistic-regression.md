---
id: logistic-regression
title: Logistic Regression
sidebar_label: Logistic Regression
---

import { Quiz, Question, AnswerPanel } from "../../components/Quiz";

Logistic Regression is a Machine Learning algorithm which is used for the classification problems, it is a predictive analysis algorithm and based on the concept of probability.We can call a Logistic Regression a Linear Regression model but the Logistic Regression uses a more complex cost function, this cost function can be defined as the ‘Sigmoid function’ or also known as the ‘logistic function’ instead of a linear function. The hypothesis of logistic regression tends it to limit the cost function between 0 and 1. Therefore linear functions fail to represent it as it can have a value greater than 1 or less than 0 which is not possible as per the hypothesis of logistic regression. <br/>

<p align="center">
<img src="https://raw.githubusercontent.com/OneStep-elecTRON/ContentSection/main/Courses/easy_track/Logistic%20Regression/Logreg-1.png" alt="drawing" width="700"/>
</p>

So whats this sigmoid function? In order to map predicted values to probabilities, we use the Sigmoid function. The function maps any real value into another value between 0 and 1. In machine learning, we use sigmoid to map predictions to probabilities.<br/>

<p align="center">
<img src="https://raw.githubusercontent.com/OneStep-elecTRON/ContentSection/main/Courses/easy_track/Logistic%20Regression/Logreg-2.png" alt="drawing" width="700"/>
</p>

We use logistic regression for classification problems and it is known to give great results. It creates a boundary or a line that divides the two classes of the data that we have and tries to do it in the best possible way to ensure better classification. Let's say we have to build a classifier that classifies between different species of flowers based on their different features or maybe you wish to classsify the different breeeds of dogs based on their features, for all this, we can make use of Logistic Regression.<br/>

This was the basic knowledge and intuition that you need before you start implementing them with the help of the notebook and also do the quiz that will ensure that you have the right understanding of the concepts.<br/>

:::tip Implementation Walkthrough

Learn this section on <a href='https://colab.research.google.com/drive/1TPhijTvqIPMOjwKtTCqQNFloJu3L6soC?usp=sharing'>Google Colab.</a>

:::

 <Quiz>
  <Question>For which type of problem can we use Logistic Regression?</Question>
  <AnswerPanel
    answers={["Regression Only", "Classification Only", "Both Regression and Classification", "None of these"]}
    correctIndex={2}
    track="basic"
  />
</Quiz>
