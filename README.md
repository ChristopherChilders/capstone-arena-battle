# capstone-arena-battle
Brawl is a first person combat game that allows players to compete against non-playable opponents in a simulated combat experience.

## Technologies
Brawl uses a React.js based frontend and a Node.js server that draws/stores information with a PostgreSQL database. As well as the previous, Brawl also uses:
- Websockets to create an open line of communication between our frontend and backend as opposed to single use HTTP requests.
- Redux.js to store our state for us.
- SVG in order to populate the images that are used onto the game canvas.
- Express and Express Sessions to authenticate user information.
- HTML 5, CSS3, and JavaScript es6 to create an interactive webpage for the game.

## Contributors 
- Christopher Childers
- Jason Boerner
- Andrew Josey
- Victor Truong

## Challenges
- One of the biggest challenges that we faced very early on was trying to implement Websockets vs HTTP. The reason that we decided to utilize Websockets over HTTP was because we knew that we would be making a lot of requests that will need to be displayed in real time. Since HTTP closes the connection once a request has been completed, we decided to give Websockets a try. Our chief problem with this technology was ignorance. It was a technology that none of us had used. Because of this, we spent quite a few hours scouring through the Documentation and researching bug fixes for Websocket errors. After 4 days, countless hours of searching, and even more failings, we were able to open up the connections between our React frontend and our Node backend.
- The aspect of making a "fun" game vs. something just playable for now was a big let down for all of us, but realizing it is a project we can keep adding to, and improving it as we go is nice. We cut a lot of core feature we wanted to add for demo day, and we will have to make do with what we have for now. Desgining our own art assets was a chore as well, but loads of fun.
- A major challenge was planning the layout for the incoming data from database and how we would manage state on the front end.  This is important for setting up our game for future additions.  Each feature we added to the game is able to be scaled when we add more characters, monsters and attacks down the line.  
