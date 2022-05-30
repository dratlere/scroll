import React, { useRef } from 'react';
import './style.css';

export default function App() {
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();

  const onClickCallback = (ref) => () => {
    ref.current.scrollIntoView({
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      <nav>

        <button onClick={onClickCallback(section1)}>What is React?</button>
        <button onClick={onClickCallback(section2)}>Why you should use React</button>
        <button onClick={onClickCallback(section3)}>How does React work?</button>
        <button onClick={onClickCallback(section4)}>Try it for yourself</button>
      </nav>

      <div style={{ width: 500 }}>

        <h2 ref={section1}>What is React?</h2>
        React is a JavaScript library that helps developers to build user interfaces – the things you interact with on websites. It has become popular because of its simplicity and flexibility and is used by companies like Facebook, Instagram and Airbnb.

First of all, since React is a JavaScript library, we need to have some basic knowledge of what JavaScript (and a library) is. If HTML structures your website and CSS styles it, then JavaScript makes it dynamic and is probably what makes things move, refresh or change on the site you’re visiting.

To avoid writing time consuming repetitive functions in JavaScript you can use different libraries, i.e. pre-written JavaScript code. React is one of many libraries and it’s completely frontend and specializes in things that the user interacts with when they’re using a website. This could be buttons, search bars and menus.

And it’s called React because it reacts. It was developed by Facebook (a site that CONSTANTLY updates their data) to improve the user interface development and more effectively change (REACT to) what the user sees when they’re doing things like mouse clicking, submitting and typing.

        <h2 ref={section2}>Why you should use React</h2>
        So what makes React so popular?

    Well, React is declarative which means that you tell it WHAT you want (written in React language) and then it solves the HOW and builds the user interfaces in the web browser.
    In order to simplify and not focus on the whole website at the same time, you break it down into smaller components that you can reuse wherever you want to.
    Instead of having a complete website re-render every time something changes, React can update only the things that are different than they were before an event happened. This means that if you, for example, change your profile picture, the image is the only thing that is re-rendered – nothing else on the site is updated and replaced with data that is basically the same as it was before. Because that would be kind of unnecessary, right? 

        <h2 ref={section3}>How does React work?</h2>
        React Components

When you’re using React you start by dividing your site into smaller components. For a news site, this could be a header, a search bar and an article with title, image and text. You build your different components separately and then assemble them in a main file.
JSX

As previously mentioned, HTML is what structures your website (the skeleton), and it’s written in its own file. With React, you can use something called JSX which allows you to bring HTML into your JavaScript files and build components that consist of both.

JSX accepts something called “props” (properties) which make it possible to insert custom data into the components. In our newspaper example, this means we can use the article component as a kind of template but then add unique props like title, image and text to create different articles for our news.
Virtual DOM

There is something called the DOM, which is the programming interface for HTML documents. It represents the data on a web page and makes it possible to change what we see on it. When you’re using JSX, React creates something called a Virtual DOM which is a copy of the actual DOM. It compares the data on both places and only replaces the thing in the DOM that is different, like a comment being added, a button being pressed etc. It may not sound like a big deal, but when you have a lot of things constantly changing on a site, this selective updating results in way better loading time and computing power.

        <h2 ref={section4}>Try it for yourself</h2>
        TReact has its own website with step-by-step guides, tutorials and everything you need to get started! If you want to you can also play around with React on sites like CodePen and CodeSandbox.

Darcy Winterhill

Developer and Technigo alumni.

    LinkedIn
    
        <button className="scrollToTop" onClick={scrollToTop}>
          Scroll to top
        </button>
      </div>
    </>
  );
}
