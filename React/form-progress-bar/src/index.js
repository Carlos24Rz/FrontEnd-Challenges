import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function ProgressBar(props) {
  return (
    <div>
      <label>Form Completion</label>
      <div className="form-progress-bar-wrapper">
        <div className="form-progress-bar" progress={props.progress}></div>
      </div>
    </div>
  );
}

function Form(props) {
  return (
    <form onSubmit={props.onsubmit}>
      <label htmlFor="documentType">Document Type</label>
      <select 
        id="documentType"
        value={props.docType} 
        className={`form-select ${props.isValidDocType}`}
        onChange={(event) => {props.onchangeDocType(event.target.value);}}
      >
        <option value=''></option>
        <option value='Plain'>Plain</option>
        <option value='PDF'>PDF</option>
      </select>
      <label htmlFor="documentName">Document Name</label>
      <input 
        type="text" 
        id="documentName"
        value={props.docName}  
        className={`form-control ${props.isValidDocName}`}
        onChange={(event) => {props.onchangeDocName(event.target.value);}}
      />
      <label htmlFor="category">Category</label>
      <select 
        id="category"
        value={props.category}  
        className={`form-select ${props.isValidCategory}`}
        onChange={(event) => {props.onchangeCategory(event.target.value);}}
      >
        <option value=''></option>
        <option value='Audit'>Audit</option>
        <option value='Application'>Application</option>
        <option value='Other'>Other</option>
      </select>
      <label htmlFor="email">Email</label>
      <input 
        type="email" 
        id="email"
        value={props.email} 
        className={`form-control ${props.isValidEmail}`}
        onChange={(event) => {props.onchangeEmail(event.target.value);}}
      />
      <br />
      <button className="btn btn-primary" type="submit" formMethod="get">Submit</button>
    </form>
  );
}

function App() {

  const [docType,setDocType] = React.useState('');
  const [validDocType,setValidDocType] = React.useState('');
  const [docName,setDocName] = React.useState('');
  const [validDocName,setValidDocName] = React.useState('');
  const [category,setCategory] = React.useState('');
  const [validCategory,setValidCategory] = React.useState('');
  const [email,setEmail] = React.useState('');
  const [validEmail,setValidEmail] = React.useState('');
  const [progress,setProgress] = React.useState('');

  React.useEffect(() => {
    console.log("Holi");
    let newProgress = 0;

    if(docType.length !== 0) {
      newProgress += 25;
      setValidDocType("is-valid");
    } else {
      setValidDocType("is-invalid");
    }

    if(docName.trim().length > 2 && docName.trim().length < 125){
      newProgress += 25;
      setValidDocName("is-valid")
    } else {
      setValidDocName("is-invalid");
    }

    if(category.length !== 0){
      newProgress += 25;
      setValidCategory("is-valid");
    } else {
      setValidCategory("is-invalid");
    }

    if(email.trim().length !== 0){
      newProgress += 25;
      setValidEmail("is-valid");
    } else {
      setValidEmail("is-invalid");
    }

    setProgress(newProgress);

  }, [docType,docName,category,email]);

  function validateForm(e){
    e.preventDefault();

    const regex = /^[a-z0-9]+([\.]?[a-z0-9]+)*@[a-z0-9]+([.]?[a-z0-9]+)*(\.[a-z0-9]{2,3})+/g;
    console.log(regex.test(email));
  }

  return (
    <div className="app">
      <ProgressBar progress={progress}/>
      <Form
        docType={docType}
        isValidDocType={validDocType}
        docName={docName}
        isValidDocName={validDocName}
        category={category}
        isValidCategory={validCategory}
        email={email}
        isValidEmail={validEmail} 
        onchangeDocType={setDocType}
        onchangeDocName={setDocName} 
        onchangeCategory={setCategory}
        onchangeEmail={setEmail}
        onsubmit={validateForm}
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
