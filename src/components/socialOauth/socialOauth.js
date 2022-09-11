import React from 'react'
import { GoogleLogin } from 'react-google-login';
// import { OAuth2Client } from 'google-auth-library'
// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'



const SocialOauth = () => {

    // const getDecodedOAuthJwtGoogle = async token => {

    //     const CLIENT_ID_GOOGLE = 'yourGoogleClientId'
      
    //     try {
    //       const client = new OAuth2Client(CLIENT_ID_GOOGLE)
      
    //       const ticket = await client.verifyIdToken({
    //         idToken: token,
    //         audience: CLIENT_ID_GOOGLE,
    //       })
      
    //       return ticket
    //     } catch (error) {
    //       return { status: 500, data: error }
    //     }
    //   }

    const responseGoogle = async (res) => {
        if(res?.credential){
            // const realUserData = await getDecodedOAuthJwtGoogle(credential)
            // console.log(realUserData)

        } else {
            alert('authentication error')
        }
        
    }
    // const responseFacebook = (response) => {
    //     console.log(response);
    // }
    return (
        <div>
            <GoogleLogin
                clientId="378355966103-3dmnr1k78h0sgm22jtud44dch1uan6id.apps.googleusercontent.com"
                // render={renderProps => (
                //     <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Login with Google</button>
                // )}
                // buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                // cookiePolicy={'single_host_origin'}
                
                render={renderProps => (
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Login with google</button>
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}

                accessType="offline"
                responseType="code"
                prompt="consent"
                scope="https://www.googleapis.com/auth/calendar"
            />
            {/* <FacebookLogin
                appId="1088597931155576"
                autoLoad
                callback={responseFacebook}
                render={renderProps => (
                    <button onClick={renderProps.onClick}>Login with Facebook</button>
                )}
            /> */}
        </div>
    )
}

export default SocialOauth