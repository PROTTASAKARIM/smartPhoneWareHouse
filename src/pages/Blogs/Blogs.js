import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <h1>Difference between javascript and nodejs?</h1>
            <p>
                Javascript is an implementation of ECMAScript, a standard defining the programming language which is used in frontend development.Browsers have a built-in interpreter for Javascript, along with a bunch of libraries and a run-time environment for working with web pages. Javascript is used for writing scripts on the website and It is basically used on the client-side. It is capable enough to add HTML and play with the DOM.
            </p>

            <p>
                Nodejs is an interpreter and environment for javascript which includes a bunch of libraries for using javascript as a general-purpose programming language, with an emphasis on asynchronicity and non-blocking operations. Node actually runs the same interpreter as Google Chrome (V8), but provides a different set of libraries and a different run-time environment. It also includes a package management system (NPM) and a few language extensions you won't find standard in browsers. It is mostly used on the server-side. Nodejs does not have capability to add HTML tags. Nodejs is written in C, C++ and Javascript.
            </p>


            <h1>When should you use nodejs and when should you use mongodb?</h1>
            <p>
                Node is server side javascript framework. It is asynchronous and is used mainly to develop REST services which can be consumed by frontend. With node both client (browser code) and server both uses javascript language. There are many pre-built modules available. Node.js is a popular programming environment that can be used for building high-scale applications that need to support multiple concurrent requests. Single-threaded non-blocking I/O makes it an excellent choice for both real-time and data streaming applications.

            </p>
            <p>

                MongoDB is a document based NoSQL database. In terms of CAP theorem it falls in CP, consistent and partition tolerant by default. Records are stored as Bson documents in mongoDB.As a document database, MongoDB makes it easy for developers to store structured or unstructured data. It uses a JSON-like format to store documents. This format directly maps to native objects in most modern programming languages, making it a natural choice for developers, as they don’t need to think about normalizing data. MongoDB can also handle high volume and can scale both vertically or horizontally to accommodate large data loads.</p>
            <h1>Differences between sql and nosql databases.</h1>
            <p><ul>
                <li>SQL databases are relational, NoSQL databases are non-relational.</li>
                <li>SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                <li>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                <li>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
            </ul></p>
            <h1>What is the purpose of jwt and how does it work?</h1>
            <p>
                JSON Web Token (JWT) is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted. JWT is useful in Authorization and Information Exchange. The JWT looks something like this: xxxxx.yyyyy.zzzzz.
            </p>
            <p>
                <strong>Authorization</strong>: This is the most common scenario for using JWT. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. Single Sign On is a feature that widely uses JWT nowadays, because of its small overhead and its ability to be easily used across different domains.
            </p>
            <p>
                <strong>Information Exchange:</strong> JSON Web Tokens are a good way of securely transmitting information between parties. Because JWTs can be signed—for example, using public/private key pairs—you can be sure the senders are who they say they are. Additionally, as the signature is calculated using the header and the payload, you can also verify that the content hasn't been tampered with.
            </p>

        </div>
    );
};

export default Blogs;