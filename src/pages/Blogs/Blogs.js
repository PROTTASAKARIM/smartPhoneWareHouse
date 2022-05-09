import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1>Difference between javascript and nodejs?</h1>
            <p>Javascript is an implementation of ECMAScript, a standard defining the programming language.

                Browsers have a built-in interpreter for Javascript, along with a bunch of libraries and a run-time environment for working with web pages.

                Nodejs is an interpreter and environment for javascript which includes a bunch of libraries for using javascript as a general-purpose programming language, with an emphasis on asynchronicity and non-blocking operations. Node actually runs the same interpreter as Google Chrome (V8), but provides a different set of libraries and a different run-time environment. It also includes a package management system (NPM) and a few language extensions you won't find standard in browsers.</p>
            <h1>When should you use nodejs and when should you use mongodb</h1>
            <p>Node is server side javascript framework. It is asynchronous and is used mainly to develop REST services which can be consumed by frontend. With node both client (browser code) and server both uses javascript language. There are many pre-built modules available.

                MongoDB is a document based NoSQL database. In terms of CAP theorem it falls in CP, consistent and partition tolerant by default. Records are stored as Bson documents in mongoDB.</p>
            <h1>Differences between sql and nosql databases.</h1>
            <p><ul>
                <li>SQL databases are relational, NoSQL databases are non-relational.</li>
                <li>SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                <li>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                <li>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
            </ul></p>

        </div>
    );
};

export default Blogs;