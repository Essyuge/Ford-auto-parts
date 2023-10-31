
import Header from './Components/Header'
import Slider from './Components/Slider'
// import ford from "../assets/Ford1.jpg"


const images = [

  'https://media.istockphoto.com/id/1066241986/photo/private-pickup-car-ford-ranger.jpg?s=612x612&w=0&k=20&c=OaH1dzCeSJtFLmosAxaJsxXdcxuCAzmhJXrZKmE9Fac=',
  'https://media.istockphoto.com/id/499598795/photo/dodge-ram-1500.jpg?s=612x612&w=0&k=20&c=M0JPa6UpfzSTmVEh_0-9xOtIvXvcgmuUcMB7Ov9zuYo=',
  'https://media.istockphoto.com/id/1465801679/photo/close-up-shot-of-a-ford-pickup-truck-in-gray-melbourne-australia.jpg?s=612x612&w=0&k=20&c=pQQln4TS-3GoCPCpNZimiJAdqkn7TgdxLjWshzhOPMA=',
  'https://media.istockphoto.com/id/1302053897/photo/ford-f-150-raptor.jpg?s=612x612&w=0&k=20&c=Fgj5rFEjJV1gOlaWJDJoeSsKbyvmH7vEsorHhEBnhPk=',
  'https://media.istockphoto.com/id/1419949127/photo/ford-f-350.jpg?s=612x612&w=0&k=20&c=pKJhcP0tJhiABJyeElbo5CqvNxaK3X_G1NIFaeKxIZw=',
  // '/assets/ford.jpg',
  
  // Add more image URLs here
];


function App() {
 

  return (
    <>
      <Header/>
      <Slider images={images} />
    </>
  )
}

export default App
