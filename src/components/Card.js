import React from 'react';
import '../styles/Card.css';

function Card() {
  return (
    <div className="cards">
      <div className="row" style={{ justifyContent: 'center' }}>
        <div className="column">
          <div className="card">
            <h3>KNeighborsClassifier</h3>
            <p></p>
            <p>KNeighborsClassifier is a simple yet effective classification algorithm in machine learning. It classifies data points by the majority class among their k-nearest neighbors. Its flexibility in choosing the value of 'k' and straightforward implementation make it suitable for various classification tasks, particularly when the data distribution is not complex.<br></br></p>
            
          </div>
        </div>

        <div className="column">
          <div className="card">
            <h3>Naive Bayes</h3>
            
            <p>Naive Bayes is a simple and powerful machine learning algorithm for classification. It's based on Bayes' theorem and assumes feature independence. It's effective for text classification, like spam detection, and excels in various classification tasks, despite its simplicity.<br></br></p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <h3>Random Forest</h3>
            
            <p>Random Forest is a versatile machine learning algorithm for classification and regression. By combining decision trees, it improves predictions. Introducing randomness during training reduces overfitting and enhances generalization. Widely used in image classification and finance, it offers accuracy and robustness.<br></br></p>

          </div>
        </div>

        <div className="column">
          <div className="card">
            <h3>svm</h3>
            <p>Support Vector Machine (SVM) is a powerful machine learning algorithm that excels in classification and regression tasks. It works by finding an optimal hyperplane to separate data into distinct categories. SVM's versatility, effectiveness, and ability to handle high-dimensional data make it a popular choice in various applications, from image recognition to financial forecasting.<br></br></p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
