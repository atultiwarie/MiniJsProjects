const teams = [
  {
    name: "Mumbai Indians",
    logo: "https://i.pinimg.com/736x/d6/14/5f/d6145f4ba2784ec6313daef64b6aa99b.jpg",
    primary: "#004ba0",
    secondary: "#ffcc00",
  },
  {
    name: "Chennai Super Kings",
    logo: "https://i.pinimg.com/1200x/e7/c1/fa/e7c1fac050e5cfdeaf2d8dbf3826e892.jpg",
    primary: "#f7d000",
    secondary: "#1a237e",
  },
  {
    name: "Royal Challengers Bangalore",
    logo: "https://i.pinimg.com/736x/c9/9c/dc/c99cdc5ce1ae2b626f45645a91a358a1.jpg",
    primary: "#cc0033",
    secondary: "#000000",
  },
  {
    name: "Kolkata Knight Riders",
    logo: "https://i.pinimg.com/1200x/0b/a4/1c/0ba41c8db8e657b6a9d0070bb61f1e4a.jpg",
    primary: "#3f0071",
    secondary: "#ffd600",
  },
  {
    name: "Gujarat Titans",
    logo: "https://i.pinimg.com/1200x/74/a5/92/74a592875bca70ffd1dcdb8cacc19c8f.jpg",
    primary: "#00a6a6",
    secondary: "#003333",
  },
  {
    name: "Lucknow Super Giants",
    logo: "https://i.pinimg.com/736x/86/c6/14/86c61402da3732392321dc9f4c6375fb.jpg",
    primary: "#ff7a00",
    secondary: "#00324d",
  },
  {
    name: "Sunrisers Hyderabad",
    logo: "https://i.pinimg.com/1200x/6e/9d/25/6e9d252b1a8ec39b01a248f1f9bd8b57.jpg",
    primary: "#ff4500",
    secondary: "#1a1a1a",
  },
  {
    name: "Rajasthan Royals",
    logo: "https://i.pinimg.com/1200x/68/c5/d4/68c5d4e34c0a26a4a11ffd080839e8e7.jpg",
    primary: "#9b59b6",
    secondary: "#ffffff",
  },
  {
    name: "Delhi Capitals",
    logo: "https://i.pinimg.com/1200x/d8/cc/36/d8cc3681367f41229a660fa45a59360e.jpg",
    primary: "#0038a8",
    secondary: "#ffffff",
  },
  {
    name: "Punjab Kings",
    logo: "https://i.pinimg.com/736x/22/87/05/2287054fc77a169a3ee4912c921c8ad6.jpg",
    primary: "#ff2d55",
    secondary: "#ffffff",
  },
];


let btn = document.querySelector(".btn")
let imgDiv = document.getElementById("image")
let winnerDiv = document.getElementById("winner")
let teamLogo = document.getElementById("team-logo")

btn.addEventListener("click",()=>{
    let randomNum = Math.floor(Math.random()*teams.length)
    let winnerTeam = teams[randomNum]
    teamLogo.src= winnerTeam.logo
    winnerDiv.innerText = `The winner of IPL 2026 is ${winnerTeam.name}`
    winnerDiv.style.backgroundColor = winnerTeam.primary
    winnerDiv.style.color = winnerTeam.secondary
    imgDiv.style.backgroundColor= winnerTeam.primary
    
})