import React from 'react';
import NavBar from "../components/NavBar_copy";
import "../styles/About.css"

function AboutUS() {

    return (
<div className='container'>
      <div className='body'>
            <NavBar />    
           
hiiiiii


<div className="row">
        <div className="column">
          <div className="card-about-1">
          <img style={{ width: '105%', marginTop: '15%' }} position='top' alt='...' src='https://miro.medium.com/v2/resize:fit:828/0*oJNHNtiFqsiAMYbj' />
            
          </div>
        </div>

        <div className="column">
          <div className="card-about">
          <h1 className="h1 text-uppercase" >INTRODUCTION</h1>
          <p style={{ color: 'black', textAlign: 'justify', marginleft:'100%' }}>

          <br></br>
              A Traffic Detection System is a critical component of modern transportation infrastructure designed to monitor, manage, and optimize traffic flow on roadways and urban streets. Leveraging advanced technologies, such as cameras, sensors, and data analytics, these systems provide real-time insights into traffic conditions, incident detection, and traffic signal coordination. The primary goal is to enhance safety, reduce congestion, and improve the overall efficiency of transportation networks. By constantly monitoring and analyzing traffic data, Traffic Detection Systems empower authorities to make informed decisions, mitigate congestion, and provide timely information to commuters, ultimately contributing to smoother and safer journeys for all.   </p>
          </div>
        </div>
        </div>


        <div className="row">
        <div className="column">
        <div className="card-about-1"style={{marginleft:'100%'}}>
          <h1 className="h1 text-uppercase" >KEY FEATURES</h1>
                                    <p style={{ color: 'black', textAlign: 'justify', marginleft:'100%' }}>

                                        <br></br>
                                    The key features of the Traffic Prediction System include real-time traffic updates, route optimization, safety alerts, and eco-friendly travel recommendations. Users can access up-to-the-minute traffic information, receive optimized route suggestions, stay informed about safety hazards, and discover eco-conscious transportation options. These features work together to ensure a smoother and safer commuting experience while promoting sustainable travel choices.   </p>
          </div>
        </div>

        <div className="column">
        <div className="card-about"style={{color:"red"}}>
          <img style={{ width: '105%', marginTop: '15%' }} position='top' alt='...' src='https://cdn.bulbapp.io/frontend/images/1944f37c-7381-4cfa-967c-70c8bed649b7/1' />
            
          </div>
        </div>
        </div>   


       <h1>Matchine Learning Models That We Use</h1>
       <br></br>
       <br></br>

       <div className="row_last">
        <div className="column">
        <div className="card_3"style={{marginleft:'100%'}}>
          <h2 className="h2 text-uppercase" >KNeighbors Classifier</h2>
                                    <p style={{ color: 'black', textAlign: 'justify', marginleft:'100%' }}>

                                        <br></br>
                                        K-Nearest Neighbors (KNN) is a simple yet effective supervised machine learning algorithm. It predicts based on the majority class of the K nearest data points. KNN works for classification and regression tasks, though it has limitations in high-dimensional data. It finds use in recommendation systems, image classification, and anomaly detection due to its simplicity and versatility. It's a valuable tool in machine learning for its intuitive approach and ease of use.   </p>
          </div>
        </div>

        <div className="column">
        <div className="card_3"style={{marginleft:'100%'}}>
          <h2 className="h2 text-uppercase" >Naive Bayes</h2>
                                    <p style={{ color: 'black', textAlign: 'justify', marginleft:'100%' }}>

                                        <br></br>
                                        Naive Bayes is a fundamental machine learning algorithm known for its simplicity and efficiency. It's widely used for text classification tasks, such as spam email detection and sentiment analysis, where it excels in making predictions based on the probability of class membership. Naive Bayes assumes that features are independent, which is a "naive" but often reasonable simplification. Despite its simplicity, Naive Bayes often delivers strong performance, making it a popular choice for various classification problems.   </p>
          </div>
        </div>

        <div className="column">
        <div className="card_4"style={{marginleft:'100%'}}>
          <h2 className="h2 text-uppercase" >Random Forest</h2>
                                    <p style={{ color: 'black', textAlign: 'justify', marginleft:'100%' }}>

                                        <br></br>
                                        Random Forest is a versatile and powerful machine learning algorithm. It's commonly used for both classification and regression tasks, offering exceptional accuracy by combining multiple decision trees. What sets Random Forest apart is its ability to reduce overfitting and enhance generalization through the introduction of randomness during training. This makes it a top choice for various applications, from image classification to financial forecasting, where precision and robustness are crucial.   </p>
          </div>
        </div>

        <div className="column">
        <div className="card_4"style={{marginleft:'100%'}}>
          <h2 className="h2 text-uppercase" >Support Vector Machine</h2>
                                    <p style={{ color: 'black', textAlign: 'justify', marginleft:'100%' }}>

                                        <br></br>
                                    
                                       
                                       Support Vector Machine (SVM) is a versatile model for classification and regression. It finds the best hyperplane to separate data into classes, even in high dimensions. SVM is known for its robustness in handling complex data, making it suitable for various applications, from image recognition to text classification. Its strong theoretical foundations have established SVM as a reliable tool in the machine learning toolbox.</p>
          </div>
        </div>







        </div>   


    
      </div>

      </div> 

    )
};

export default AboutUS;