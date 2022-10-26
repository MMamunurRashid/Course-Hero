import React from "react";

const Blog = () => {
  return (
    <div className="sm:mx-32 mx-2 mb-5">
      {/* Question 1 */}
      <div className="mt-3">
        <h1 className="text-xl sm:text-3xl font-serif font-semibold mb-3  text-white">
          What is cors ?
        </h1>
        <img
          className="bg-white sm:w-2/5 rounded-xl"
          src="https://www.keycdn.com/img/support/cors.png"
          alt=""
        />
        <p className="text-lg sm:text-xl text-white font-semibold mt-3">
          Cross-Origin Resource Sharing (CORS):
        </p>
        <p className="sm:text-lg">
          {" "}
          is an <strong>HTTP</strong> -header based mechanism that allows a
          server to indicate any origins (domain, scheme, or port) other than
          its own from which a browser should permit loading resources.
          <strong>CORS</strong>
          also relies on a mechanism by which browsers make a "preflight"
          request to the server hosting the{" "}
          <strong> cross-origin resource</strong>, in order to check that the
          server will permit the actual request. In that preflight, the browser
          sends headers that indicate the <strong>HTTP</strong> method and
          headers that will be used in the actual request.
        </p>
      </div>
      {/* Question 2 */}
      <div className="mt-8">
        <h1 className="text-xl sm:text-3xl font-serif font-semibold mb-3  text-white">
          Why are you using <strong>Firebase</strong> ? What other options do
          you have to implement authentication?
        </h1>
        <h3 className="text-lg sm:text-xl text-white font-semibold">
          Firebase
        </h3>
        <p className="sm:text-lg">
          <strong>Firebase Authentication</strong> provides backend services,
          easy-to-use SDKs, and ready-made UI libraries to authenticate users to
          your app. It supports authentication using passwords, phone numbers,
          popular federated identity providers like{" "}
          <strong>Google, Facebook and Twitter</strong>, and more.
        </p>
        <h3 className="text-lg sm:text-xl text-white font-semibold mt-3">
          What are the other options to do implement authentication ?
        </h3>
        <p className="sm:text-lg">
          <strong> Auth0, MongoDB, Passport, Okta </strong> are the most popular
          alternatives and competitors to Firebase Authentication.
        </p>
      </div>
      {/* Question 3 */}
      <div className="mt-8">
        <h1 className="text-xl sm:text-3xl font-serif font-semibold mb-3  text-white">
          How does the private route work?
        </h1>
        <p className="sm:text-lg">
          The private route component is similar to the public route, the only
          change is that{" "}
          <strong>redirect URL and authenticate condition</strong>. If the user
          is not authenticated he will be redirected to the login page and the
          user can only access the authenticated routes If he is authenticated
        </p>
      </div>
      {/* Question 4 */}
      <div className="mt-8">
        <h1 className="text-xl sm:text-3xl font-serif font-semibold mb-3  text-white">
          What is Node? How does Node work?
        </h1>
        <img
          className="bg-white sm:w-2/5 rounded-xl"
          src="https://kinsta.com/wp-content/uploads/2021/03/Nodejs-Architecture.png"
          alt=""
        />
        <h3 className="text-lg sm:text-xl text-white font-semibold mt-3">
          What is Node ?
        </h3>
        <p className="sm:text-lg">
          <strong>Node.js</strong> is an <strong>open-source</strong>,
          <strong>cross-platform JavaScript runtime environment</strong> and
          <strong> library</strong> for running web applications outside the
          client's browser.
        </p>
        <h3 className="text-lg sm:text-xl text-white font-semibold mt-3">
          How does Node work?
        </h3>
        <p className="sm:text-lg">
          It is a used as backend service where javascript works on the
          server-side of the application. This way javascript is used on both
          frontend and backend. Node. js runs on chrome v8 engine which converts
          javascript code into machine code, it is highly scalable, lightweight,
          fast, and data-intensive.
        </p>
      </div>
    </div>
  );
};

export default Blog;
