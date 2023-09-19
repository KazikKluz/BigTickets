import axios from 'axios';

const LandingPage = ({ currentUser }) => {
  // console.log(currentUser);
  return <h1>Landing Page</h1>;
};

LandingPage.getInitialProps = async () => {
  // const response = await axios.get('/api/users/currentuser');

  // return response.data;
  if (typeof window === 'undefined') {
    //we are on the server
    //request should be made to ingress-nginx
  } else {
    //we are on the browser
    //request can be mande with base url of ''
  }
  console.log('I was executed');
  return {};
};

export default LandingPage;
