import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Particles from 'react-particles-js';

import TransitionGroup from "react-transition-group/TransitionGroup";

import './App.css';

import Home from './Home/Home';
import About from './About/About';
import Skills from './Skills/Skills';
import Work from './Work/Work';
import Contact from './Contact/Contact';

import SideBar from './SideBar/SideBar';

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

class App extends Component {
  render() {
    return (
      <div className="hartsol-app">
        <section className="hartsol-main-view">
        <Particles 
          params={{
            particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                value_area:1000
              }
            },
            color: {
              value: "#fff"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#fff"
              },
              polygon: {
                nb_sides: 3
              }
            },
            opacity: {
              value: 0.4,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 100,
              color: "#ffffff",
              opacity: 0.4,
              width: 1
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab"
              },
              onclick: {
                enable: false
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
              },
              repulse: {
                distance: 200,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
          }}
        />
        <Switch>
            <Route
              exact
              path="/"
              children={({ match, ...rest }) => (
                <TransitionGroup component={firstChild}>
                  {match && <Home {...rest} />}
                </TransitionGroup>
            )}/>
            <Route
               path="/about"
               children={({ match, ...rest }) => (
                 <TransitionGroup component={firstChild}>
                   {match && <About {...rest} />}
                 </TransitionGroup>
            )}/>
            <Route
               path="/skills"
               children={({ match, ...rest }) => (
                 <TransitionGroup component={firstChild}>
                   {match && <Skills {...rest} />}
                 </TransitionGroup>
            )}/>
            <Route
               path="/work"
               children={({ match, ...rest }) => (
                 <TransitionGroup component={firstChild}>
                   {match && <Work {...rest} />}
                 </TransitionGroup>
            )}/>
            <Route
               path="/Contact"
               children={({ match, ...rest }) => (
                 <TransitionGroup component={firstChild}>
                   {match && <Contact {...rest} />}
                 </TransitionGroup>
            )}/>
          </Switch>
        </section>
        <aside className="hartsol-aside-view">
          <SideBar />
        </aside>   
      </div>
    );
  }
}

export default App;
