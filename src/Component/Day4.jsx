import React from 'react'
import './Style.css';

const Day4 = () => {
  return (
    <div>
        <h3>Q-2 :- What is Context API?</h3>
        <ul>
          <li>The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.</li>
          <li>The React Context API is a way for a React app to effectively produce global variables that can be passed around.</li>
          <li>React context API is a react structure that introduced with react v.16.3</li>
          </ul><br></br>
        <h3>Q-3 :- What is the difference between callback and useCallback Hook ?</h3>
        <p className='bold'>callback :- </p>
          <ul className='items'>
            <li>callback is a function which is to be executed after another function has finished their execution.</li>
          </ul>
          <p className='bold'>useCallback :- </p>
          <ul className='items'>
            <li>useCallback is a hook that return a memoized callback when a passed a function and list of dependencies that sets a parameter.</li>
            <li>useCallback is useful when a component is passing a callback to its child component in order to prevent the re-rendering.</li>
          </ul>
         <br></br>
        <h3>Q-4 :- What is Props Drilling Concept and State Uplifting concept?</h3>
        <p className='bold'>Props Drilling :- </p>
          <ul className='items'>
           <li>It is the process by which you pass data from one component of the React Component tree to another by going through other components that do not need the data but only help in passing it around.</li>
          </ul>
          <p className='bold'>State upLifting :- </p>
          <ul className='items'>
            <li>When several components need to share the same changing data then it is recommended to lift the shared state up to their closest common ancestor.</li>
            <li>That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components.</li>
          </ul>
        <br></br>
        <h3>Q-5 :- What is the difference between useEffect hook and useContext hook?</h3>
        <p className='bold'>useEffect() :- </p>
          <ul className='items'>
            <li>useEffect hook allow us to implement the lifecycle methods in the functional components.</li>
            <li>CompoentDidMount(),componentDidUpdate() and compinentWillUnmount() methods gets triggered in the useEffect hook function.</li>
          </ul>
          <p className='bold'>useContext() :- </p>
          <ul className='items'>
            <li>useContext() hook allow us to work with react's context API which itself a mechanism to allow us to share data within its components tree without passing data through props.</li>
          </ul>
        <br></br>
        <h3>Q-6 :- What are React Life cycles Explain each one with Example?</h3>
        <p className='bolder'>Every react components has a lifecycles of its own.Lifecycle methods we used to monitored our components in different stages of the components existence.</p>
        <p className='bolder'>Lifecycles has four phases that are mentioned below as:</p>
        <ul className='items'>
          <li><b className='bold'>Initialization : </b>In Initialization stage,the components is contructed wth the given props and default stage.This is done in the constructor of a components class.</li>
          <li><b className='bold'>Mounting : </b>Munting is the stage of rendering the JSX returned by the render method itself.In this stage,componentDidMount() methods gets called.</li>
          <li><b className='bold'>updating : </b>Updating is the stage where the state of the components is updated.In this stage,componentDidUpdate() method gets called.</li>
          <li><b className='bold'>Unmounting : </b>This is the final stage of the component lifecycle whre the component is removed from or destoryed from the browser page.In this stage componentWillUnmount() method gets called.</li>
        </ul>
    </div>
  )
}

export default Day4