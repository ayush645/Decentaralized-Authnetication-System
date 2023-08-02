
  <h1><p align="center"><b><b>User Management System</b></b>
</p></h1>

<div align="center">

  <a href="">![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)</a>
  <a href="">![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)</a>
  <a href="">![Open In Collab](https://colab.research.google.com/assets/colab-badge.svg)</a>
  <a href="">[![Minimum node.js version](https://badgen.net/npm/node/express)](https://npmjs.com/package/express)</a>
</div>


<!-- [![VISIT NOW]([https://i.imgur.com/ltoeZAt.png](https://user-images.githubusercontent.com/80636235/215766035-9725be67-246f-4c86-a2bb-ea5f251209b6.jpg))](https://www.youtube![Screenshot 2023-08-02 195316](https://github.com/ayush645/Luganodes/assets/80757890/8a5b0d84-de86-4941-b497-0193739bf5fa)
.com/watch?v=XfDXwT79xRA) -->
<p align="Center"><a href="https://loan-eligibility.onrender.com/" > 🌐 Visit Me Now 🌐</a></p>


<!-- [![Watch the video]([https://i.imgur.com/ltoeZAt.png](https://ibb.co/YbwMNDk))] -->
## Understanding Problem Statement

User management dashboard with multi-authentication with Email/Password and Web3 authentication


https://user-images.githubusercontent.com/80636235/215860666-873b0869-aa22-4b39-9bcb-9daf70f1d60e.mp4


## Tech Stack Used

![image](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![image](https://img.shields.io/badge/Numpy-013243?style=for-the-badge&logo=numpy&logoColor=white)
![image](https://img.shields.io/badge/Pandas-130654?style=for-the-badge&logo=pandas&logoColor=white)
![image](https://img.shields.io/badge/Matplotlib-11557C?style=for-the-badge&logo=Matplotlib&logoColor=white)
![image](https://img.shields.io/badge/Seaborn-50537F?style=for-the-badge&logo=Seaborn&logoColor=white)
![image](https://img.shields.io/badge/scikit_learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Jupyter Notebook](https://img.shields.io/badge/jupyter-%23FA0F00.svg?style=for-the-badge&logo=jupyter&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Canva](https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white)

## Classification Report/Accuracy Matrix

| Category/Class  | Precision | Recall | F1-Score | support |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| 0  | 0.91  | 0.97 | 0.94 | 105 |
| 1  | 0.96  | 0.88 | 0.92 | 84 |
|   |   |  |  |
|   |   |  |  |
accuracy |  |  | 0.93 | 189 |
| macro avg  | 0.94  | 0.93 | 0.93 | 189 |
| weighted avg | 0.93  | 0.93 | 0.93 | 189 |



## Set Up For Development

AILOEC was build over python version 3.7.6. But all the library supports any python version >=3.7.6. All other library's are available in requirements.txt which can be installed via command below. The API needs a seperate start if needed to start api over development server. Follow the steps mentioned in respected part. If any bug irritates you feel free raise a issue.

### Install packages or API:

```
$ pip install -r requirements.txt
```

### Start Local Server For API Testing:

```
$ uvicorn mlapi:app --reload
```

For Testing The API different ways can be used either you can download PostMan Community Version for testing. Once you start the local server just add a route "\predict" at the end of your local host link. It might look as well

```
$ https:\\{Your IP}\predict
```

It requires a header which contains different details which will be given as user input via website and these will be used to predict the possiblity of fraud or not-fraud. A sample header which might look as follows:-

```
{
    "NPPM": 1,
    "LoanStatus": "existing loans paid back duly till now",
    "Objective": "Purchase of radio/television",
    "Amount": 1278,
    "Guarantee": "none",
    "Experience": "between 1 and 4 years",
    "M_Status": "male and single",
    "ExistingLoan": 1,
    "Age": 36,
    "CA_Balance": "no current account",
    "SA_Balance": "less than 100",
    "PI_Balance": 4,
    "WorkAB": "Yes",
    "PhNum": 0,
    "Tenure": 24,
    "prop": "Real Estate",
    "JobTyp": "management/ self-employed/highly qualified employee/ officer",
    "HouseT": "own",
    "NOE": 1
}
```


### Start Website on LocalHost For Testing:

Pre-requiste you should have node installed and setup complted on your system to run AILOEC on your local system 

```
$ npm install root_dir/main_dir
```

```
$ npm run dev
```
