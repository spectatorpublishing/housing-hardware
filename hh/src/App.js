import React, { Component } from 'react';
import QandA from './components/QandA.js';
import styled, { createGlobalStyle } from 'styled-components';
import TitlePage from './components/TitlePage.js'
import Pic from './components/Pic.js';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700|Raleway');

body{
	margin: 0;
    padding: 0;
    font-family: "Raleway", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
`
let Container = styled.div`
width: 60vw;
margin-left: 20vw;

  @media only screen and (max-width: 600px){
    width: 80vw;
    margin-left: 10vw;
}
`

let Link = styled.a`
    text-decoration:none;
&:hover{
    text-decoration:none;
}
&:active{
    text-decoration:none;
}
&:visited{
    text-decoration:none;
}
&:focus{
    text-decoration:none;
}
`

let Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  height: auto;
  background-color: #2651C1;
  color: white; 
  font-size: 1.8rem;
  margin-bottom: 50px;
  padding: 20px;
  border-radius: 10px;
  transition: transform 0.3s ease-out;
  &:hover{
    transform: scale(1.2);
  }
  @media only screen and (max-width: 900px){
    width: 90%;
  }
`

class App extends Component {
  render() {
    return (
      <div>
      <TitlePage title = "HOME AWAY FROM HOME"/>
      <Container>
        <GlobalStyle/>
        <div style={{"font-size":"1.3rem", "margin-top":"50px", "margin-bottom":"50px","line-height":"2rem"}}>
        Leaving home can be a hard step to take, whether home is 10 miles away or on the other side of the world. And from the first night you sleep on the navy blue twin XL mattresses, you might wish you were back at home, laying inon your own bed, looking at your own posters and photos on your wall. At first, you might not feel that you need to make changes or decorate your room, but as you understand you’ll be in college away from home for at least 4 years, you might want to start to individualize your living space to feel more comfortable. That’s why creating a “home away from home” may ease your life and better your time at college. And decorating your room to make a home does not necessarily mean that you should create an “Instagram-able” place where you can show off. Rather, it’s what you feel that’s important when you get into your room. A place which can speak up your identity and personality, and your feelings. The more you get into creating “your space”, you’ll see that adding up to feeling at home, you will also be able to share your vision and character with your friends.
        <br/>
        <br/>
        Jessica is one of many students who transformed her “dorm” into her “home”.
        <br/>
        <br/>
        Jessica Velasco is a Physics major at Columbia College. She grew up in Nashville, Tennessee but she considers both Nashville and Mexico City her home. She loves to cook, make smoothies, and hang out with her friends when she has free time. Outside of school, she loves to travel and explore New York City by going to art galleries or trying out new restaurants.
        <br/>
        <br/>
        <hr style={{"width":"70%"}}/>
        </div>
        <QandA question = "If you had to describe your room in three words, what would they be?" answer = "Cozy, relaxing, aesthetic"></QandA>
        <QandA question = "Describe home in three words." answer = "Culture, Mexico, family"></QandA>
        <QandA question = "How were you inspired to decorate your room? Were there specific colors or themes that you wanted to see in your space?" answer = " I wanted to take one piece and then reproduce the tone of it as the theme of my room. I got this pillow from my trip to Quebec and then I just kinda wanted to incorporate colors that complemented this pillow into my room. So I think I really focused on gold tones and pinks."></QandA>
        <Pic img = "https://s3.amazonaws.com/spec-imagehosting/cup.jpg"></Pic>
        <QandA question = "What are some objects that remind you of home? Did you bring them with you, or find similar objects in New York?" answer = "I use Alexa every day to get the weather, help with homework, or to play music and relax. As for room decorations, I have lights all around my room to set a serene environment. I also have a television to watch TV when I have free time.Culture, Mexico, family"></QandA>
        <QandA question = "Describe home in three words." answer = "Culture, Mexico, family"></QandA>
        <Pic img = "https://s3.amazonaws.com/spec-imagehosting/alexa.jpg"></Pic>
        <QandA question = "What are some home improvements that you want to make?" answer = "Honestly I’m not a very crafty person. I probably want to rearrange my room soon because right now it’s kind of hard to access my fridge."></QandA>
        <Pic img = "https://s3.amazonaws.com/spec-imagehosting/bottle.jpg"></Pic>
        <div style={{"font-size":"1.3rem", "margin-top":"50px", "margin-bottom":"50px","line-height":"2rem"}}>
        <hr style={{"width":"70%"}}/>
        <br/>
        Just as Jessica reflects her personality and describes herself with her room, everybody can turn their rooms into a home away from home. You don’t need complex tech or sparkly decorations. Start by just hanging some photos that remind you of family, friends, and good memories. You can bring your cacti or your favorite CDs to garnish in front of your window. Are you new to the city? Get a basic map and start by marking the spots you’ve been. Build memories! Step by step, you’ll see you’re creating a space that reflects yourself. Just let your room show who you are, it’s never too late to start creating a “home away from home”.
        </div>
        <Link href="https://www.universityhardwarehouseware.com"><Button><div style={{"width":"100"}}>Find all your dorm decorating needs at University Hardware Housewares!</div></Button></Link>
      </Container>
      </div>
    );
  }
}

export default App;
