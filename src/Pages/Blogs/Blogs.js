import React from 'react';

const Blogs = () => {
    return (
        <div className=' w-3/5 mx-auto mb:w-full mb-10  mt-5'>
            <div className="">
                <h1 className='text-orange-600 text-3xl'>DIFFERENCE BETWEEN JAVASCRIPT AND NODEJS?</h1>
                <p className='font-bold text-xl mt-2 mb-2'>JAVASCRIPT:</p>
                <ul className=''>
                    <li>1: Java Script is a client side coding</li>
                    <li>2: Java Script is a language</li>
                    <li>3:Java script runs inside the browser</li>
                    <li>4: Java script provides behaviour to your pages [HTML,CSS]</li>
                    <li>5: JavaScript is a lightweight, cross-platform</li>
                </ul>
                <p className='font-bold text-xl mt-2 mb-2'>NODE.JS:</p>
                <ul>
                    <li>1:  Node js enables server side coding written in Java Script</li>
                    <li>2: Node js is not a language but it has V8 engine that runs Java script on the server side.</li>
                    <li>3:  Node js runs outside the browser [i.e server]</li>
                    <li>4: Node js is a server can perform server functions like reading files ,database objects,etc</li>
                    <li>5:.Node js has "npm" - Node Package Manager - Used for sharing  and reusing the cod</li>
                </ul>

            </div>
            <div className="">
                <h1 className='text-orange-600 text-3xl mt-5' >DIFFERENCE BETWEEN SQL AND NOSQL DATABASES?</h1>
                <p className='font-bold text-xl mt-2 mb-2'>SQL:</p>
                <ul className='text-'>
                    <li>1: SQL is generally used in Relation Database Management System</li>
                    <li>2: Structured data can be stored in tables</li>
                    <li>3: The  Schemas are Static</li>
                    <li>4: Schemas are rigid  and bound to relationships</li>
                    <li>5: Helpful to design complex queries</li>
                </ul>
                <p className='font-bold text-xl mt-2 mb-2'>NOSQL:</p>
                <ul>
                    <li>1: NOSQL is used to for Non-relational ,distributed database system.</li>
                    <li>2: Using JSON data ,un-structured data can be stored</li>
                    <li>3: The Schemas are Dynamic</li>
                    <li>4: Schemas are not -rigid,they are flexible</li>
                    <li>5:No interface to prepare complex query</li>
                </ul>
            </div>
            <div className="">
                <p className='text-orange-600 text-3xl mt-5'>WHAT IS THE PURPOSE OF JWT AND HOW DOES IT WORK?</p>
                <p className='font-bold text-xl mt-2 mb-2'>JWT:</p>
                <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                <p className='font-bold text-xl mt-2 mb-2'>How JWT Works:</p>
                <p>A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                    Once decoded, you will get two JSON strings:
                    <br />
                    The header and the payload.
                    The signature.
                    The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.
                    <br />
                    The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.
                    <br />
                    There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.
                </p>
            </div>
        </div>
    );
};

export default Blogs;