import "./App.css";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Nickname from "./components/Nickname";

function App() {
  const socket = io("https://chat.peruzal.com", {
    autoConnect: false
  })

  const ADD_USER = "add user";
 
  useEffect(() => {
      socket.connect();

      socket.on('connect', () => {
          // TODO - Set a visible icon for connection status
          console.log('connected')
      })

      socket.on('connect_error', (error) => {
          console.log(error)
      })

      socket.on('disconnect', () => {
        console.log('Disconnected');
      })

      socket.on('login', (message) => {
        console.log(`Logged in ${JSON.stringify(message)}`)

        socket.on('new message', (message) => {
          console.log(`New message ${JSON.stringify(message)}`)
        })
  
        socket.on('user joined', (message) =>  {
          console.log(`User joined ${JSON.stringify(message)}`)
        })
  
        socket.on('typing', (message) => {
          console.log(`Typing ${JSON.stringify(message)}`)
        })
  
        socket.on('stop typing', (message) => {
          console.log(`Stop typing ${JSON.stringify(message)}`)
        })
  
        socket.on('user left', (message) => {
          console.log(`User left ${JSON.stringify(message)}`)
        })
      });


      return ()  => {
        // Unsubscribe and cleanup
        socket.off("user joined");
        socket.off("new message");
        socket.off("stop typing");
        socket.off('user joined');
        socket.io.off('login')
        socket.off('user left');
        socket.off('typing');
        socket.off("connect");
        socket.off("onnect_error");
        socket.disconnect();
      }
  }, [socket])

  const onHandleNickname =  (nickname) => {
    socket.emit('add user', nickname)
    console.log(nickname)
  };

  return (
    <div>
      <Nickname onHandleNickname={onHandleNickname} />
    </div>
  );
}

export default App;
