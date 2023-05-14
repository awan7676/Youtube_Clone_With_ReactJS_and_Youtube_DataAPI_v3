Hi there!<br/>
This is a youtube clone implemented in React JS.<br/>
YouTube DataAPI v3 is used and Axios is used for HTTP requests to the API.<br/>

After cloning the code, follow these steps and you are good to go:<br/>
**1) Go to Google Developers Console and create a new project.**<br/>
**2) Select the newly created project and navigate to APIs & Services > Library > YouTube > YouTube Data API v3 and enable the API.**<br/>
**3) Navigate to Credentials and select Create Credentials and choose API Key Option.**<br/>
**4) Copy the API key.**<br/>
**5) Open the code folder in editor.**<br/>
**6) First of all, run npm install**<br/>
**7) Create a file named ApiContext.js in the /src/contexts and paste the following code in the file:** <br/>

<pre>
import { createContext } from "react";

export const ApiContext = createContext();

const ApiContextProvider = ({ children }) => {
    const API_KEY = 'Paste the copied API Key here';
    return (
        <ApiContext.Provider value={{ API_KEY }}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiContextProvider
</pre>
<br/>

