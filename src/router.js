import React from 'react';
import {Router, Route} from 'react-router-dom';

function AppRouter(){
  return(
    <Router>
      <Route path="/upload_image" exact component={UploadImage}/>
    </Router>
  )
}

export default AppRouter();

