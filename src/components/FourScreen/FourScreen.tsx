import React from 'react';


const FourScreen = () => {
  return (
    <div className="content4">
      <h2>Contacts</h2>
      <div className={'cardForm'}>
        <div className={'supportForm'}>
          <h3 className={"formTitle"}>
            Fill out the form to join our team
          </h3>
          <div className={"inputsWrapper"} id={'about'}>
            <input className="input" type="text" name="Name" value={""} placeholder={"Name"}/>
            <input className="input" type="text" name="Email" value={""} placeholder={"Email"}/>
            <input className="input" type="text" name="Telephone" value={""} placeholder={"Telephone"}/>
          </div>
            <button className='buttonAplly'>Apply</button>

        </div>
      </div>
    </div>
  );
};

export default FourScreen;