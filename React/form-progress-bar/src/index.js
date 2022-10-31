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
    <form>
      <label htmlFor="documentType">Document Type</label>
      <select 
        id="documentType"
        value={props.docType} 
        className="form-select"
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
        className="form-control"
        onChange={(event) => {props.onchangeDocName(event.target.value);}}
      />
      <label htmlFor="category">Category</label>
      <select 
        id="category"
        value={props.category}  
        className="form-select"
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
        className="form-control"
        onChange={(event) => {props.onchangeEmail(event.target.value);}}
      />
      <br />
      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  );
}

function App() {

  const [docType,setDocType] = React.useState('');
  const [docName,setDocName] = React.useState('');
  const [category,setCategory] = React.useState('');
  const [email,setEmail] = React.useState('');
  const [progress,setProgress] = React.useState('');

  React.useEffect(() => {
    console.log("Holi");
    let newProgress = 0;

    if(docType.length !== 0) newProgress += 25;
    if(docName.trim().length !== 0) newProgress += 25;
    if(category.length !== 0) newProgress += 25;
    if(email.trim().length !== 0) newProgress += 25;

    setProgress(newProgress);
  }, [docType,docName,category,email]);



  return (
    <div className="app">
      <ProgressBar progress={progress}/>
      <Form
        docType={docType}
        docName={docName}
        category={category}
        email={email} 
        onchangeDocType={setDocType}
        onchangeDocName={setDocName} 
        onchangeCategory={setCategory}
        onchangeEmail={setEmail}
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
